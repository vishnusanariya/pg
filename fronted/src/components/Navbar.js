import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.jpg'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to= "/"><img src={logo}  alt="" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to= "/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to= "/viewPgs">view pgs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to= "/registerPgs">register pgs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to= "/signin">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to= "/register">register</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
