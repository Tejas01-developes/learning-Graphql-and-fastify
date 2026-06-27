import { FastifyReply, FastifyRequest } from "fastify";
import { collection1 } from "./schema";

// export const registeruser=async(req:FastifyRequest,resp:FastifyReply):Promise<void>=>{
//     const{email,password}=req.body as{
//         email:string,
//         password:string
//     }
//     if(!email || !password){
//         resp.status(400).send({success:false,message:"user details missing"})
//         return
//    }
// try{
// await collection1.create({email,password})
// resp.status(200).send({success:true,message:"user registered"})
// return

// }catch(err){
//     resp.status(400).send({success:false,message:"register api failed"})
//     return
// }
// }

interface RegisterArgs {
    email?: string;
    password?: string;
  }

export const registeruser={
Mutation:{
    registeruser:async(_parent:any,args:RegisterArgs,context:any,_info:any)=>{
        const{email,password}=args

        if (!email || !password) {
            throw new Error("User details missing");
          }
          try{
          await collection1.create({ email, password });
          return {
            success: true,
            message: "user registered"
          };
    }catch(err){
        console.error(err);
        throw new Error("register api failed");
    }
}
}

}