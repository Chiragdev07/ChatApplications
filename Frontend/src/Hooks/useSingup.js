import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../../Contex/AuthContex';


const useSingup = () => {
    const [loading, setloading] = useState(false);
    const {setAuthuser}=useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const result = ({ fullname, username, password, confirmPassword, gender });
        const success = handleInputError({ fullname, username, password, confirmPassword, gender })
        if (!success) return;
        setloading(true);
        try {
            const res = await fetch("/api/auth/singup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(result),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            //localstorege
            localStorage.setItem("chat-user", JSON.stringify(data));
            //context
            setAuthuser(data);




        }catch (error) {
            toast.error(error.message);
            console.log(error.message);
        } 
        
        
        finally {
            setloading(false);
        }
    }

    return { loading, signup }
}

export default useSingup

function handleInputError({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error('please Fill All Filds')
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Password does not match")
        return false;

    }

    if (password.length < 6) {
        toast.error("password must be 6 cherecters");
        return false;
    }
    return true;
}