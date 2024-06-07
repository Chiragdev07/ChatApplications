import {create} from 'zustand';

const useConversation=create((set)=>({
    selectedConversation:null,
    setselectedConversation:(selectedConversation)=>set({selectedConversation}),
    message:[],
    setmessage:(message)=>set({message}),
}))

export default useConversation;