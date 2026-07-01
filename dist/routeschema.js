"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryschema = void 0;
exports.queryschema = `
type Response{
success:Boolean,
message:String
}
type user3{
    email:String
    age:Int
}

type user2{
    name:String,
    email:String,
    password:String
  result:[user3!]!
}



type Mutation{
adduser1(name:String!,email:String!,password:String!):Response
adduser2(email:String!,age:Int!):Response
}


type Query{
   getuser:[user2!]!
  
}

type Subscription{
  useradded: user2!
}

`;
//# sourceMappingURL=routeschema.js.map