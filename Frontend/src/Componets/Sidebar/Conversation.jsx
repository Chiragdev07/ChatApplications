import React from 'react'
import useConversation from '../../Zustand/useConversation'
import { useSocketContext } from '../../../Contex/SoketContext';

const Conversation = (  conversation,lastidx,emoji) => {
  const{selectedConversation, setselectedConversation}=useConversation();
  const isselected=selectedConversation?._id ===conversation.conversation._id;

  

    const {onlineUsers}=useSocketContext();
    const isonline=onlineUsers.includes(conversation.conversation._id);


        
     
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
    ${isselected?"bg-sky-500":""}`} onClick={()=>{setselectedConversation(conversation.conversation)}}>


         <div className={ ` avatar ${isonline ? "online":""} `}>
              <div className='w-12 rounded-full'>
                     <img src={conversation.conversation.profilepic} alt="Usr avatar" />
              </div>
         </div>
         <div className='flex flex-col flex-1'>
             <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.conversation.fullname}</p>
                <span className='text-xl'>{conversation.emoji}</span>
             </div>
         </div>
    </div>
    {!conversation.lastidx && <div className='divider my-0 py-0 h-1'/>}
    
    </>
  )
}

export default Conversation