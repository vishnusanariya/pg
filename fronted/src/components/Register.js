import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css'
function Register() {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",password:"",cpassword:"",address:"",pincode:"",phone_no:"",rent:"",person:"",accomodation_facilities:"",lodging:""
  });
  let fieldName,fieldValue;
  const handleInputs=(e)=>{
    console.log(e);
    fieldName=e.target.name;
    fieldValue=e.target.value;
    setUser({...user,[fieldName]:fieldValue});
  }
  const submitForm = async (e)=>{
    e.preventDefault();
    console.log('form submited')
    const { name, email, password, cpassword} = user;
    // res.header('Access-Control-Allow-Origin', '*');

    axios.post('http://localhost:5000/register',{name,email,password,cpassword})
    .then(res=>{
      console.log(res);
      alert('registration success');
      navigate('/signin');
    })
    .catch(err=>{console.log(err);console.log('registration failed')
    if(err.response.status===666){
      alert('email already registered please sign in')
      navigate('/signin');
    }
  })

  }
  return (
    <>
    
      <div className="container mt-5">
        <form className='form-control'>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4"><i className="zmdi zmdi-account-circle"></i> Name</label>
              <input type="text" name="name" onChange={handleInputs} className="form-control" id="inputUser4" placeholder="Name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4"><i className="zmdi zmdi-email"></i> Email</label>
              <input type="email" name="email" onChange={handleInputs} className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4"><i className="zmdi zmdi-lock"></i> Password</label>
              <input type="password" name="password" onChange={handleInputs} className="form-control" id="inputPassword4" placeholder="Password" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4"><i className="zmdi zmdi-lock-outline"></i> confirm Password</label>
              <input type="password" name="cpassword" onChange={handleInputs} className="form-control" id="inputPassword5" placeholder="confirm Password" />
            </div>
            </div>
          <input type="submit" onClick={submitForm} className="btn btn-primary" value="Sign up"/>
        </form>
      </div>
    </>
  )
}

export default Register
