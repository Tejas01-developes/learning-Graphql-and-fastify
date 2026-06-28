export const graphqlschema=`
type RegisterResponse {
    success:Boolean!
    message:String!
}

type User{
    email:String!
    password:String!
}
type Users2{
    name:String!
    age:Int!
}

type User2data{
    name:String
    email:String
}

type Users3{
    email:String,
    resultt:[User2data]
}

type Mutation {
registeruser(email:String!,password:String!):RegisterResponse
register2(name:String!,email:String!,age:Int!):RegisterResponse
}

type Query {
   getusers:[User!]!
   getusers2:[Users2!]!
   getusers3:[Users3!]!
}   
`;