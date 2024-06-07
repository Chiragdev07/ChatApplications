import React, { useEffect, useState } from 'react'
import useConversation from '../Zustand/useConversation.jsx';
import toast from 'react-hot-toast';


const useGetMessages = () => {

    const [loading,setloading]=useState();
    const { selectedConversation, message, setmessage } = useConversation();

    useEffect(()=>{

        const getMessage=async()=>{
            setloading(true)
            try {

                const res=await fetch(`/api/message/${selectedConversation._id} `);
                const data=await res.json();
                if(data.error)throw new Error(data.error);
                setmessage(data);
                
            } catch (error) {
             //toast.error(error.message);
            }finally{
               setloading(false);
            }
        }
        if(selectedConversation?._id)getMessage();

    },[selectedConversation?._id,setmessage]);
  return {message,loading}
}

export default useGetMessages