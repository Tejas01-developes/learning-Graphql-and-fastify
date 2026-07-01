import fastify from "fastify";
import formbody from '@fastify/formbody'
import cookie from "@fastify/cookie";
import dbconection from "./dbconection";
import mercurius from "mercurius";
// import helmet from '@fastify/helmet'
import { queryschema } from "./routeschema";
import { resolver } from "./controller";



const app=fastify({logger:true});


app.register(formbody)
app.register(cookie)
// app.register(helmet)

app.register(mercurius,{
    schema:queryschema,
    resolvers:resolver,
    graphiql:true,
    subscription:true
})


app.listen({port:3000},async()=>{
    await dbconection.connect()
    console.log("server startedon the port 3000")
})