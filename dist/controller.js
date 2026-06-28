"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryapi = void 0;
const schema2_1 = require("./schema2");
// import crypto from 'crypto'
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.queryapi = {
    Mutation: {
        registeruser: async (_parent, args, _context) => {
            const { name, email, password } = args;
            if (!name || !email || !password) {
                return {
                    success: false,
                    message: "user datail is not there"
                };
            }
            try {
                const hash = await bcrypt_1.default.hash(password, 10);
                await schema2_1.collection2.create({ name, email, password: hash });
                return {
                    success: true,
                    message: "User registered succesfully"
                };
            }
            catch (err) {
                return {
                    success: false,
                    message: "registration failed"
                };
            }
        },
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
    }
};
//# sourceMappingURL=controller.js.map