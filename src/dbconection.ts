import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


class dbconnect{
    private dburl:string

    constructor(){
        this.dburl=process.env.DB_URL as string
    }

    async connect(){
        try{
await mongoose.connect(this.dburl)
console.log("Database connected")
        }catch(err){
            console.log("Database connection failed")
        }
    }
}


export default new dbconnect()