
import { collection1 } from "./schema";
import { collection2 } from "./schema2";

interface RegisterArgs {
  name?:string
  age?:number
    email?: string;
    password?: string;
  }
  interface Register2 {
    name?:string
    age?:number
      email?: string;
      
    }

export const queryapi={
Mutation:{
    registeruser:async(_parent:any,args:RegisterArgs,_context:any,_info:any)=>{
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
},


register2:async(_parent:any,args:Register2,_context:any,_info:any)=>{
const{name,email,age}=args
if (!name || !email || !age) {
  throw new Error("User details missing");
}
try{
await collection2.create({name,email,age})
return{
  success:true,
  message:"user2 registered"
}
}catch(err){
  return{
    success:false,
    message:"register failed"
  }
}

}




},

Query:{

getusers:async(_parent:any,_args:RegisterArgs,_context:any,_info:any)=>{
const res:any[]=await collection1.find()

if(res.length === 0){
  return{
    success:false,
    message:"No users in the database"
  }
}
return res

},
getusers2:async(_parent:any,_arges:any,_context:any,_info:any)=>{
  const res:any[]=await collection2.find();
  if(res.length === 0){
    return{
      success:false,
      message:"no user in the list"
    }
  }
  return res
  },


getusers3:async(_parent:any,_args:any,_context:any)=>{
const res:any[]=await collection1.aggregate([
{$lookup:{
  from:"user2",
  localField:"email",
  foreignField:"email",
  as:"resultt"
}}

])
if(res.length === 0){
  return {
    success:false,
    message:"result is empty"
  }
}
return res
}


}






}