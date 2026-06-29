export const queryschema=`
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

`