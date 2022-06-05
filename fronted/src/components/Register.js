import React from 'react'
import './Register.css'
function Register() {
  return (
    <>
      <div className="container mt-5">
        <form className='form-control'>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4"><i class="zmdi zmdi-account-circle"></i> Name</label>
              <input type="text" class="form-control" id="inputEmail4" placeholder="Name" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4"><i class="zmdi zmdi-email"></i> Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4"><i class="zmdi zmdi-lock"></i> Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4"><i class="zmdi zmdi-lock-outline"></i> confirm Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="confirm Password" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress"><i class="zmdi zmdi-pin"></i> Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2"><i class="zmdi zmdi-pin-drop"></i> pincode</label>
              <input type="number" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2"><i class="zmdi zmdi-phone"></i> contact</label>
              <input type="number" class="form-control" id="contact" placeholder="+91" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2"><i class="zmdi zmdi-money-box"></i> rent</label>
              <input type="number" class="form-control" id="rent" placeholder="INR" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2"><i class="zmdi zmdi-accounts-alt"></i> person</label>
              <input type="number" class="form-control" id="person" placeholder="e.g.3" />
            </div>
            <div class="form-group col-md-6">
                <label for="inputCity"><i class="zmdi zmdi-comments"></i> accomodation_facilities</label>
                <input type="text" class="form-control" id="inputCity" placeholder='wifi,AC,TV,furniture..' />
            </div>
          </div>
          <div className="form-raw">
            <div class="form-group col-md-6">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
              <i class="zmdi zmdi-cutlery"></i> lodging
              </label>
            </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    </>
  )
}

export default Register
