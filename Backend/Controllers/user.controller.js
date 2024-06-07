import User from "../models/user.model.js";

export const getUserForSidebar=async(req,res)=>{
       try {

        const loggedInUserId=req.user._id;
        const filterUser=await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filterUser);
        
       } catch (error) {
        console.log("Error in user.controller ",error.message);
        res.status(500).jsone("Internal Server error");
       }
}