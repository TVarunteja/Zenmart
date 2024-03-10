import React, { useState } from 'react';
// import './main.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';



export default function Login() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2000/checkcustomerlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("/")
       //window.location.href = "https://newerp.kluniversity.in/"
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
            <h1 className='text-center text-2xl font-bold'>LOGIN</h1>
            {
              message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
            }
            <form className='w-full py-3' align="middle" onSubmit={handleSubmit}>
              
              <lable htmlFor='email'>Email</lable>
              <input type={"email"} id='email' name='email' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={formData.email} onChange={handleChange} required ></input>
              <div>
              <lable htmlFor='password'>Password</lable>
              <input type={"password"} id='password' name='password' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={formData.password} onChange={handleChange} required></input>
              <span><FaRegEye /></span>
              </div>
              <button align="center"className='w-50 md-2 bg-red-300 px-2 py-1 rounded focus-within:outline-blue-300 '>Login</button>
            </form>
            <p className='text-right text-sm mt-2'>Dosn't have an account signup? <Link to={"/Signup"}>Signup</Link></p>
        </div>
    </div>
  )
}

// export default Login