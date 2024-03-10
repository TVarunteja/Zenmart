import React, { useState } from 'react';
// import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AdminLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/checkadminlogin', formData);
      if (response.data!=null) 
      {
        navigate("/adminhome")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };


  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <h1 className='text-center text-2xl font-bold'>Admin Login</h1>
            {
                message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
            }
            <form className='w-full py-3' align="middle" onSubmit={handleSubmit}>
              
              <div>
                <lable htmlFor="username">Username</lable>
                <input type="text" id="username" name="username" className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={formData.username} onChange={handleChange} required ></input>
              </div>
              <div>
                <lable htmlFor='password'>Password</lable>
                <input type="password" id='password' name='password' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={formData.password} onChange={handleChange} required ></input>
              </div>
              <button align="center"className='w-50 md-2 bg-red-300 px-2 py-1 rounded focus-within:outline-blue-300 ' type="submit">Login</button>
            </form>
            
        </div>
    </div>

  )
}