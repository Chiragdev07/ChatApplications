import React from 'react'
import { useAuthContext} from '../../../Contex/AuthContex'
import useConversation from '../../Zustand/useConversation';
import { extracttime } from '../../../../Backend/Utils/ExtractTime';



const Message = ({message}) => {
  const {Authuser}= useAuthContext();
  const{selectedConversation}=useConversation();
  const fromMe=message.senderId===Authuser._id;
  const FrometedTime=extracttime(message.createdAt);
  const Chatclassname=fromMe?'chat chat-end ':'chat chat-start';
  const ProfilePic=fromMe? Authuser.profilepic:selectedConversation?.profilepic;
  const Buublebgcolor=fromMe ? 'bg-blue-500': '';
  const shakeclass=message.sholdShake ? "shake" : "";

  return (
    <div className={`chat ${Chatclassname}`}>
        <div className='chat-image avatar'>
           <div className='w-10 rounded-full'>
           <img alt="Tailwind CSS chat bubble component" src={ProfilePic} />

           </div>
        </div>
        <div className={`chat-bubble shake text-white ${Buublebgcolor} pb-2  ${shakeclass}   `}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{FrometedTime}</div>
    </div>
  )
}

export default Message