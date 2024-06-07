import React, { useEffect } from 'react';
import {useSocketContext} from '../../Contex/SoketContext.jsx';
import  useConversation from '../Zustand/useConversation.jsx';

import notificationSound from '../assets/Sound/iphone_14_notification.mp3';

const useListenMessage = () => {
    const {socket}= useSocketContext();
    const { message, setmessage}=useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.sholdShake=true;
            const sound=new Audio(notificationSound);
            sound.play();
            setmessage([...message,newMessage])
        })

        return ()=>socket?.off("newMessage")
    },[socket,setmessage,message])
}

export default useListenMessage