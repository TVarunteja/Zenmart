import React, { useState } from 'react';
import axios from 'axios';
import loginSignupImage from "../mswdimages/login-animation.gif"
import { Link } from 'react-router-dom'
function Signup() {

  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    location: '',
    contact: ''
  });

    //message state variable
    const [message, setMessage] = useState('');
    //error state variable
    const [error, setError] = useState('');

    const handleChange = (e) => 
    {
      
      setFormData({...formData, [e.target.id]: e.target.value});
      //... means spread operater
      // It updates the state formData by adding or updating a property with a key equal to 
      //the ID of the input field 
      //that triggered the change event (e.target.id). The value of this property is 
      //set to the new value entered in that input field (e.target.value).
    };

    const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2000/insertcustomers', formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpassword: '',
          location: '',
          contact: ''
        });
        
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };

  const handlesignup=()=>
  {
    window.location.href='/login'
  }
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            <h1 className='text-center text-2xl font-bold'>Sign up</h1>
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                <img src={loginSignupImage} alt="loginsignupimage" className="w-full"/>
            </div>
            {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
            }
            <form className='w-full py-3' onSubmit={handleSubmit}>
            <label htmlFor='firstname' className='mb-1'>First Name</label>
            <input type={"text"} id='firstname' name='firstname' value={formData.firstname} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>

<label htmlFor='lastname' >Last Name</label>
<input type={"text"} id='lastname' name='lastname' value={formData.lastname} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>

<label htmlFor='email'>Email</label>
<input type={"email"} id='email' name='email' value={formData.email} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>

<label htmlFor='password'>Password</label>
<input type={"password"} id='password' name='password' value={formData.password} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>


<label htmlFor='password'>Confirm Password</label>
<input type={"password"} id='confirmpassword' name='confirmpassword' value={formData.confirmpassword} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>

<label htmlFor='location'>Location</label>
<input type={"text"} id='location' name='location' value={formData.location} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>

<label htmlFor='contact'>Contact number</label>
<input type={"number"} id='contact' name='contact' value={formData.contact} className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' onChange={handleChange} required></input>
              <button type="submit" align="center" className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 ' onClick={handlesignup} >Signup</button>
            </form>
            {/* <p className='text-left text-sm mt-2'>Already have account ? <Link to=("login"}>Login</Link></p> */}
            
            <p className='text-right text-sm mt-2'>Already have an account? <Link to={"/login"}>Login</Link></p>

           
        </div>
    </div>
  )
}

export default Signup