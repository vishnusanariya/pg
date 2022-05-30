import React from 'react'
import './Register.css'
function Register() {
  return (
  <>
  <div className="container">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">pincode</label>
    <input type="number" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">contact</label>
    <input type="number" class="form-control" id="contact" placeholder="+91"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">rent</label>
    <input type="number" class="form-control" id="rent" placeholder="INR"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">person</label>
    <input type="number" class="form-control" id="person" placeholder="e.g.3"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">accomodation_facilities</label>
      <input type="text" class="form-control" id="inputCity" placeholder='wifi,AC,TV,furniture..'/>
    </div>
  </div>
  </div>
  
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        lodging
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
  </div>
  </>
    )
}

export default Register
