import mongoose from "mongoose";

const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

export const collection1=mongoose.model("users",schema)