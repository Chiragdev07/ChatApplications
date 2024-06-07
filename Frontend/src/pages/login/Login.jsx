import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uselogin from '../../Hooks/uselogin.jsx';

const Login = () => {
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const {loading,login}=uselogin();
     
    const handlesubmit=async(e)=>{
       e.preventDefault();
       await login(username,password);
    }
  return (
    <div id='Login-container' className='flex flex-col item-center justify-center md:min-w-96 sm:w-96   mx-auto'  >
       <div  id='Login_page' className='w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
       bg-opacity-0'>

        <h1 className='text-3xl font-semibold text-center text-gray-300 '>
            Login
            <span className='text-blue-500'>ChatApp</span>
            </h1> 
            
            <form onSubmit={handlesubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>UserName</span>
                    </label>
                    <input type="text" placeholder='Enter username ' className='w-full input input-borderd h-10' 
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter username ' className='w-full input input-borderd h-10' 
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}/>

                </div>
                <Link to="/signup" className='text-sm hover:underline  hover:text-blue-600 mt-2 inline-block'>{"Don't"}Have a Account</Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2'
                    disabled={loading}>
                        {loading? <span className='loading loading-spinner color-white'> </span>:"Login"}
                    </button>
                </div>
            </form>
       </div>
    </div>
  )
}

export default Login





