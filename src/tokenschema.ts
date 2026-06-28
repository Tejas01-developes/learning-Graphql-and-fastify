import mongoose from "mongoose";

const tokenschema=new mongoose.Schema({

    id:{
        type:String,
        required:true,
        unique:true
    },
    userid:{
        type:String,
        required:true,
        unique:true
    },
    token:{
        type:String,
        required:true,
        unique:true
    },

    added_at:{
        type:Date,
        default:Date.now()
    },
    expired_at:{
        type:Date,
        required:true
    }

})

export const tokencollection=mongoose.model("refresh",tokenschema);