import React, { useState } from 'react'
import {toast} from 'react-hot-toast';
import {useAuthContext} from '../../Contex/AuthContex.jsx';


const uselogin = () => {
  const [loading,setloading]=useState(false);
  const {setAuthuser}=useAuthContext();


  const login=async(username,password)=>{
    const success = handleInputError({ username, password});
    if(!success) return;

    const result={username,password}

    setloading(true)
    try {
        const res=await fetch("api/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(result),
        })
        const data= await res.json();
        if(data.error){
            throw new Error(data.error);
           }
       localStorage.setItem("chat-user",JSON.stringify(data));
       setAuthuser(data);
    
    } catch (error) {
        toast.error(error.message);
    }finally{
        setloading(false);
    }
  }
  return {loading ,login};
}

export default uselogin


function handleInputError({ username, password}) {
    if ( !username || !password ) {
        toast.error('please Fill All Filds')
        return false;
    }

    if (password.length < 6) {
        toast.error("password must be 6 cherecters");
        return false;
    }
    return true;
}