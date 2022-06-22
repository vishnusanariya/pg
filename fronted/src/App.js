import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ViewPgs from './components/ViewPgs';
import React from 'react'
import Error from './components/Error';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/signin' element={<Login/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/viewPgs' element={<ViewPgs/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
