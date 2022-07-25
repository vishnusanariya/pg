import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
function RegisterPg() {
    const [pg, setPg] = useState([]);
    let fieldname, fieldvalue;
    const navigate = useNavigate();
    const handleInputs = (e) => {
        fieldname = e.target.name;
        fieldvalue = e.target.value;
        setPg({ ...pg, [fieldname]: fieldvalue });
        console.log(pg);
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post('/registerPG',pg)
            .then(res => {
                console.log("response received");
                console.log(res.data);
                if(res.status === 201){
                    alert("PG registered successfully");
                }
            })
            .catch(err => {
                console.log(err);
                if(err.response.status === 666){
                    alert('email already registered');
                  }
                if(err.response.status === 422){
                    alert('email not registered please register');
                    navigate('/register');
                  }
            })
        console.log(pg);
    }

    return (
        <>
            <section className="vh-100 h-75">
                <div className="container py-5 h-75 w-75 mt-5">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-6 col-lg-7 col-xl-6 h-auto mb-5">
                            <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                                className="img-fluid" alt="Phone" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5  h-auto w-auto pr-5 ">
                            <form>
                                <div className="row">
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="text" name="email" onChange={handleInputs} className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter registered email" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputEmail1">Phone No</label>
                                    <input type="text" name="phone_no" onChange={handleInputs} className="form-control w-100" id="exampleInputPhone1" aria-describedby="emailHelp" placeholder="Enter Phone No" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputPassword1">Address</label>
                                    <input type="text" name="address" onChange={handleInputs} className="form-control w-100" id="exampleInputAddress1" placeholder="Enter Address" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputPassword1">Pincode</label>
                                    <input type="text" name="pincode" onChange={handleInputs} className="form-control w-100" id="exampleInputPincode1" placeholder="Enter Pincode" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputPassword1">Accomodation Facilities</label>
                                    <input type="text" name="accomodation_facilities" onChange={handleInputs} className="form-control w-100" id="exampleInputAccomodation1" placeholder="Enter Accomodation Facilities" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputPassword1">Lodging</label>
                                    <input type="text" name="lodging" onChange={handleInputs} className="form-control w-100" id="exampleInputLodging1" placeholder="Enter Lodging" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputPassword1">Rent</label>
                                    <input type="text" name="rent" onChange={handleInputs} className="form-control w-100" id="exampleInputRent1" placeholder="Enter Rent" />
                                </div>
                                <div className="form-group col-md-6 w-50">
                                    <label htmlFor="exampleInputPassword1">Person</label>
                                    <input type="text" name="person" onChange={handleInputs} className="form-control w-100" id="exampleInputPerson1" placeholder="Enter Person" />
                                </div>
                                </div>
                                <div className="row align-items-center justify-content-center mt-3">
                                <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterPg
