import mongoose from "mongoose";

const schema2=new mongoose.Schema({
    // userid:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
  
},{timestamps:true})

export const collection2=mongoose.model("user2",schema2)