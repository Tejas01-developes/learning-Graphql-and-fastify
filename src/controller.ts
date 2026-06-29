import { logintype, registerusertype } from "./interfaces"
import { collection1 } from "./schema"
import { collection2 } from "./schema2"

export const resolver={

Mutation:{
 adduser1:async(_parent:any,args:registerusertype,_ctx:any)=>{
const{name,email,password}=args

await collection2.create({name,email,password})
return{
  success:true,
  message:"user added"
}
},

adduser2:async(_parent:any,args:logintype,_ctx:any)=>{
  const{email,age}=args
  
  await collection1.create({email,age})
  return{
    success:true,
    message:"user added"
  }
  }



},

Query:{

getuser:async(_parent:any,_args:any,_ctx:any)=>{
// const res:any[]=await collection2.aggregate([
// {$lookup:{
//   from:"users",
//   localField:"email",
//   foreignField:"email",
//   as:"result"
// }}
  
// ])
const res=await collection2.find();



return res
}
},
user2:{
result:async(parent:any,_args:any,_ctx:any)=>{
const target= parent.email

const res:any[]=await collection1.find({email:target})
return res

}
}

}


