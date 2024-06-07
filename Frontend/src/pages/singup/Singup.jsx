import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import React, { useState } from 'react'
import useSingup from '../../Hooks/useSingup.js';
import { Toaster } from 'react-hot-toast';



const Singup = () => {

const [input ,setinput]=useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
});

const {loading,signup}=useSingup()

const handlecheckboxchange=(gender)=>{
    setinput({...input,gender});
}



const handleSubmit=async(e)=>{
     e.preventDefault(); 
    await signup(input);
   
}
    
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
       bg-opacity-0'>
         <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Singup <span className='text-blue-500'>Chat App</span>
         </h1>
         <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-100'>Full Name</span>
                </label>
                <input type="text" placeholder='John Doe ' className='w-full input input-bordered h-10'
                value={input.fullname} 
                onChange={(e)=>setinput({...input,fullname:e.target.value})}/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-100'>User Name</span>
                </label>
                <input type="text" placeholder='User Name ' className='w-full input input-bordered h-10'
                value={input.username} 
                onChange={(e)=>setinput({...input,username:e.target.value})}/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-100'>Password</span>
                </label>
                <input type="password" placeholder='Password ' className='w-full input input-bordered h-10'
                value={input.password}
                onChange={(e)=>setinput({...input,password:e.target.value})} />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-100'>Conform Password</span>
                </label>
                <input type="text" placeholder='Conform Password ' className='w-full input input-bordered h-10' 
                value={input.confirmPassword}
                onChange={(e)=>setinput({...input,confirmPassword:e.target.value})}/>
            </div>

                <GenderCheckbox onCheckBoxChange={handlecheckboxchange} selectedGender={input.gender} />

            <Link to="/login" className='text-sm hover:underline text-gray-100  hover:text-blue-600 mt-2 inline-block'>All Ready Have Account</Link>
            
            <div>
                    <button className='btn btn-block btn-sm mt-2' 
                    disabled={loading}>
                        {loading ?<span className='loading loading-spinner '></span>:"Singup"}
                    </button>
                </div>
         </form>
       </div>
    </div>   
  )
}
<Toaster />
export default Singup



// import GenderCheckbox from './GenderCheckbox'
// import React from 'react'

// const Singup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
//        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//        bg-opacity-0'>
//          <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Singup <span className='text-blue-500'>Chat App</span>
//          </h1>
//          <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text text-gray-100'>Full Name</span>
//                 </label>
//                 <input type="text" placeholder='John Doe ' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text text-gray-100'>User Name</span>
//                 </label>
//                 <input type="text" placeholder='User Name ' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text text-gray-100'>Password</span>
//                 </label>
//                 <input type="password" placeholder='Password ' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text text-gray-100'>Conform Password</span>
//                 </label>
//                 <input type="text" placeholder='Conform Password ' className='w-full input input-bordered h-10' />
//             </div>

//                 <GenderCheckbox></GenderCheckbox>

//             <a href="#" className='text-sm hover:underline text-gray-100  hover:text-blue-600 mt-2 inline-block'>All Ready Have Account</a>
            
//             <div>
//                     <button className='btn btn-block btn-sm mt-2'>
//                         Singup
                        
//                     </button>
//                 </div>
//          </form>
//        </div>
//     </div>   
//   )
// }

// export default Singup