import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/signin' element={<Login/>}/>
    <Route exact path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
