import React from 'react';
import Conversation from './Conversation';
import useGetconversation from '../../Hooks/useGetconversation';
import { getRandomEmojis } from '../../../Contex/emojis';

const Conversations = () => {
  const { loading, conversation } = useGetconversation();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversation.map((convo, index) => (
        <Conversation key={convo._id} conversation={convo}  emoji={getRandomEmojis()} lastidx={index ===conversation.length-1}/>
      ))}
      {loading?<span className='loading loading-spinner max-auto'></span>:null}
    </div>
  );
};

export default Conversations;
