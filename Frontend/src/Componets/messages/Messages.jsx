import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../Hooks/useGetMessages';
import MessageSkeleton from '../Skeletan/MessageSkeleton';
import useListenMessage from '../../Hooks/useListenMessage';

const Messages = () => {
  const { message, loading } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && message.length > 1 && message.map((message) => (
        <Message key={message._id} message={message} />
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && message.length === 0 && (
        <p className='text-center text-white'>Send a Message to start the Conversation</p>
      )}
      <div ref={lastMessageRef}></div>
    </div>
  );
};

export default Messages;
