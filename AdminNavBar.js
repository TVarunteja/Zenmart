import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'


import AdminHome from './AdminHome';
// import ViewCustomers from './Vi';

export default function AdminNavBar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/">Home</Link>
     <Link to="/viewcustomers">View Job Seekers</Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         {/* <Route path="/viewcustomers" Component={Vi} exact/> */}
        </Routes>

    </div>
  )
}