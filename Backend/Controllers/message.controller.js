import { getReceiverSocketId, io } from '../Soket/soket.js';
import Conversation from '../models/Conversation.model.js';
import Message from '../models/message.model.js';


export const sendMassage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reseverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, reseverId] },

        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, reseverId],
            })
        }

        const newMessage = new Message({
            senderId: senderId,
            recerverId: reseverId,
            message: message
        });
        if (newMessage) {
            conversation.message.push(newMessage._id);
        }
          await Promise.all([conversation.save(), newMessage.save()]);
       
          const receiversocketid=getReceiverSocketId(reseverId);
          if(receiversocketid != "undefined"){
            io.to(receiversocketid).emit("newMessage",newMessage);
          }

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in Send Message Controller ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("message"); // Corrected field name to "messages"

        if (!conversation) {
            return res.status(200).json([]);
        }
        const object_id = conversation.message;
        const messages = await Message.find({ _id: { $in: object_id } });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in Get Message Controller ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



