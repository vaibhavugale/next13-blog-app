import axios from "axios";
import mongoose from "mongoose";

const connectMongo = async () =>{
    try{
        await  mongoose.connect(process.env.DATABASE_URL).then((data)=>{
            console.log("Connected suc..")
        })
    }catch(err){
        console.log(err);
    }
}



export default connectMongo