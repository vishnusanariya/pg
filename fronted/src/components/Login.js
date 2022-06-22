import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css'
function Login() {
  const navigate=useNavigate();
  const [useremail,setUseremail] = useState('');
  const [password,setPassword] = useState('');
  const LoginHandler = async (e) => {
    e.preventDefault();
    console.log(useremail,password);
    const res=await fetch('/signin',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:useremail,
        password:password
      })
    });
    const data=res.json();
    console.log(data);
    if(data.error || !data){
      alert(data.error);
    }
    else{
      alert('Login Successful');
      navigate('/viewPgs');
    }
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
            <input type="email" id="form1Example13"  name="useremail" className="form-control form-control-lg" value={useremail} onChange={(e)=>setUseremail(e.target.value)} />
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
