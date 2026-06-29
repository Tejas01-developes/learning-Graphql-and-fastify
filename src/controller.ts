// import { accesstoken } from "./generatetokens";
import { logintype, registerusertype } from "./interfaces"
import { collection2 } from "./schema2"
// import crypto from 'crypto'
import bcrypt from 'bcrypt';

export const queryapi={

Mutation:{
registeruser:async(_parent:any,args:registerusertype,_context:any)=>{
const{name,email,password}=args

if(!name || !email || !password){
  return {
    success:false,
    message:"user datail is not there"
  }
}
try{
  const hash=await bcrypt.hash(password,10)
  await collection2.create({name,email,password:hash})
  return{
    success:true,
    message:"User registered succesfully"
  }
}catch(err){
  return{
    success:false,
    message:"registration failed"
  }
}},

// loginuser:async(_parent:any,args:logintype,_context:any)=>{
// const{email,password}=args

// if(!email || !password){
//   return {
//     success:false,
//     message:"user datail is not there"
//   }
// }
// const res=await collection2.findOne({email})
// if(!res){
//   return {
//     success:false,
//     message:"user is not there"
//   }
// }
// const compare=await bcrypt.compare(password,res.password)
// if(!compare){
//   return{
//     success:false,
//     message:"password is incorrect"
//   }
// }
// const access:string=accesstoken()
// return {
//   success:true,
//   message:"Login succesfull"
// }

// }

// }

// }


