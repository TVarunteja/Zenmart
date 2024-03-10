import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import About from './../page/About';
import Signup from './../page/Signup';
import Login from './../page/login';
import Contact from './../page/Contact';
import "./header.css"
import ViewCustomers from '../page/ViewCustomers';
import Newproduct from '../page/Newproduct';
// import AdminLogin from '../admin/AdminLogin';

export default function Header() {
  return (
    <div>
      <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/signup'>Sign up</Link>
                <Link to='/login'>Customer Login</Link>
                {/* <Link to='/adminlogin'>Admin Login</Link> */}
                <Link to='/contact'>Contact</Link>
                <Link to='/viewcustomers'>View Customers</Link>
                <Link to='/newproduct'>Newproduct</Link>
            </ul>
        </nav>
        
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/about' element={<About/>} exact/>
            <Route path='/signup' element={<Signup/>} exact/>
            <Route path='/login' element={<Login/>} exact/>
            {/* <Route path='/adminlogin' element={<AdminLogin/>} */}
            <Route path='/contact' element={<Contact/>} exact/>
            <Route path='/viewcustomers' element={<ViewCustomers/>} exact/>
            <Route path='/newproduct' element={<Newproduct/>} exact/>
        </Routes>
    </div>
  )
}
