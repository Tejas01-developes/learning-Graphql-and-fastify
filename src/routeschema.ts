export const queryschema=`
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

`