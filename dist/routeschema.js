"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryschema = void 0;
exports.queryschema = `
type Response{
success:Boolean,
message:String
}


type Mutation{
registeruser(name:String!,email:String!,password:String!):Response
loginuser(email:String!,password:String!):Response
}


type Query{
    _empty:String
}

`;
//# sourceMappingURL=routeschema.js.map