import { createContext, useContext, useState } from "react";

export const AuthConetext=createContext();


export const useAuthContext=()=>{ 
    return useContext(AuthConetext);
}

export const AuthContextProvider=({children})=>{
    const  [Authuser,setAuthuser]=useState(JSON.parse(localStorage.getItem("chat-user"))||null);

    return <AuthConetext.Provider value={{Authuser,setAuthuser}}>
        {children}
    </AuthConetext.Provider>
}