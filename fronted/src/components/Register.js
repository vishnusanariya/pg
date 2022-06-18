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
    const { name, email, password, cpassword ,address, pincode, phone_no,rent ,person,accomodation_facilities,lodging} = user;
    // res.header('Access-Control-Allow-Origin', '*');

    axios.post('/register',{name,email,password,cpassword,address,pincode,phone_no,rent,person,accomodation_facilities,lodging})
    .then(res=>{console.log(res);console.log('registration success');navigate('/signin')}).catch(err=>{console.log(err);console.log('registration failed')})

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
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress"><i className="zmdi zmdi-pin"></i> Address</label>
              <input type="text" name="address" onChange={handleInputs}  className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress2"><i className="zmdi zmdi-pin-drop"></i> pincode</label>
              <input type="number" name="pincode" onChange={handleInputs} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress2"><i className="zmdi zmdi-phone"></i> contact</label>
              <input type="number" name="phone_no" onChange={handleInputs} className="form-control" id="contact" placeholder="+91" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress2"><i className="zmdi zmdi-money-box"></i> rent</label>
              <input type="number" name="rent" onChange={handleInputs} className="form-control" id="rent" placeholder="INR" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress2"><i className="zmdi zmdi-accounts-alt"></i> person</label>
              <input type="number" name="person" onChange={handleInputs} className="form-control" id="person" placeholder="e.g.3" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputCity"><i className="zmdi zmdi-comments"></i> accomodation_facilities</label>
                <input type="text" name="accomodation_facilities" onChange={handleInputs} className="form-control" id="inputCity" placeholder='wifi,AC,TV,furniture..' />
            </div>
          </div>
          <div className="form-raw">
            <div className="form-group col-md-6">
              <label htmlFor="inputLodging"><i className="zmdi zmdi-cutlery"></i> lodging
              <input className="form-control" name="lodging" onChange={handleInputs} type="text" id="lodging" />
              </label>
            </div>
          </div>
          <input type="submit" onClick={submitForm} className="btn btn-primary" value="Sign up"/>
        </form>
      </div>
    </>
  )
}

export default Register
