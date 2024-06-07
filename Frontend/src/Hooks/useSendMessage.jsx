import React, { useState } from 'react';
import useConversation from '../Zustand/useConversation.jsx';
import { toast } from 'react-hot-toast';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, message, setmessage } = useConversation();

  const sendMessage = async (messageContent) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageContent }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setmessage([...message, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
