import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css'
function Login() {
  const navigate=useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const LoginHandler = async (e) => {
    e.preventDefault();
    console.log(email,password);
    console.log("requeting..." )
    axios.post('http://localhost:5000/signin',{email,password})
    .then(res=>{
      console.log(res);
      console.log(res.data.jwttoken);
      let jwt=res.data.jwttoken;
      console.log('jwt:',jwt);
      alert('login success');
      navigate('/viewPgs',{state:{jwt}});

    }).catch(err=>{
      console.log(err);
      if(err.response.status === 402){alert('user not registered');navigate('/register')};
      if(err.response.status === 422){
      alert('credential failed try again');
    }
    })
  }
  return (
    <>
   <section className="vh-100 h-75">
  <div className="container py-5 h-75 w-75 mt-5">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6 h-auto">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 h-auto w-auto">
        <form method='POST' action='/signin'>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13"  name="email" className="form-control form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" name='password' className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={LoginHandler}>Sign in</button>
        </form>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Login
