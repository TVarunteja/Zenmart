import React from 'react'
// import loginSignupImage from "../mswdimages/"
// import { Link } from 'react-router-dom'
function Signup() {

  const handlesignup=()=>
  {
    window.location.href='/'
  }
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            <h1 className='text-center text-2xl font-bold'>Add New Product</h1>
            {/* <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                <img src={loginSignupImage} className="w-full"/>
            </div> */}
            <form className='w-full py-3'>
              <label htmlFor='Name' className='mb-1'> Name</label>
              <input type={"text"} id='firstName' name='firstName' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>

              <lable htmlFor='category'>category</lable>
              <input type={"text"} id='lastName' name='lastName' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>

              <lable htmlFor='image'>Image</lable>
              <input id='image' name='image' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>

              <lable htmlFor='number'>Price</lable>
              <input type={"number"} id='number' name='number' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>
              

              <lable htmlFor='text'>Discription</lable>
              <input type={"text"} id='text' name='text' className='w-full md-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>


            </form>
            <button align="center"className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 ' onClick={handlesignup}>Add</button>
            {/* <p className='text-left text-sm mt-2'>Already have account ? <Link to=("login"}>Login</Link></p> */}
            
            

           
        </div>
    </div>
  )
}

export default Signup