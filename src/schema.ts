import mongoose from "mongoose";

const schema=new mongoose.Schema({
  
 
    email:{
        type:String,
        required:true,
        unique:true
    },

    age:{
        type:Number,
        required:true,
    }

  
},{timestamps:true})

export const collection1=mongoose.model("user",schema)