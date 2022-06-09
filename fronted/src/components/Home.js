import React from 'react'
import './Home.css'
function Home() {
  return (
    <>
    <div className="home-page d-flex justify-content-center align-items-center text-center mt-5 ">
      <div className="container">
        <h1>Welcome</h1>
        <h2>Our team welcomes you</h2>
        <b> Find your Pg at your desired location</b>
        <h3>Click below</h3>
        <button className="btn btn-primary">Find Pg</button>
      </div>
    </div>
    </>
  )
}

export default Home
