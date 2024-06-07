import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const  useGetconversation = () => {
   const [loading,setloading]=useState(false);
   const [conversation,setconversation]=useState([]);

   useEffect(()=>{
    const getconversation=async()=>{
        setloading(true);
        try {
            const res=await fetch("/api/user");
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
                console.log(data.error);
            }
          setconversation(data);
            
        } catch (error) {
            toast.error(data.error);
        }finally{
            setloading(false);
        }
    }
    getconversation();
   },[])

   return {loading,conversation}
}

export default useGetconversation