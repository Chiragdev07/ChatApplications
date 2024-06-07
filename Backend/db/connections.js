import mongoose from "mongoose";

const connection=async()=>{
    try {
      await mongoose.connect(process.env.MONGOURL)
      console.log("database is connected..");  
    } catch (error) {
        console.log("database is not connectedd",error);
    }
}
export default connection;