import mongoose from "mongoose";

const ConversationShema=mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',

        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            rfe:'message',
            default:[],
        }
    ]
},{timestamps:true});

const Conversation=mongoose.model("Conversation",ConversationShema);

export default Conversation;