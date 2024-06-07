import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../Zustand/useConversation'
import { useAuthContext } from '../../../Contex/AuthContex';
import useIsMobile from '../../Hooks/useIsMobile.js'

const MessageComponents = () => {
  const { selectedConversation, setselectedConversation } = useConversation();
  const isMobile = useIsMobile();

  useEffect(() => {
    return () => setselectedConversation(null);
  }, [setselectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? <NoChatSelected isMobile={isMobile} /> : (
        <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> {""}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageComponents;

const NoChatSelected = ({ isMobile }) => {
  const { Authuser } = useAuthContext();
  
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-900 font-semibold flex flex-col items-center gap-2'>
        {isMobile ? (
          <p>Welcome {Authuser.fullname} 💥</p>
        ) : (
          <>
            <p>Welcome {Authuser.fullname} 💥</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
          </>
        )}
      </div>
    </div>
  )
}
