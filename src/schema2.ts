import mongoose from "mongoose";

const schema2=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
})

export const collection2=mongoose.model("user2",schema2)