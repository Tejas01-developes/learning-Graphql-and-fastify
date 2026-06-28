import fastify from "fastify";
import formbody from '@fastify/formbody'
import cookie from "@fastify/cookie";
import helmet from '@fastify/helmet'
import dbconection from "./dbconection";
import mercurius from "mercurius";
import { queryapi } from "./controller";
import { queryschema } from "./routeschema";



const app=fastify({logger:true});


app.register(formbody)
app.register(cookie)
// app.register(helmet)

app.register(mercurius,{
    schema:queryschema,
    resolvers:queryapi,
    graphiql:true
})


app.listen({port:3000},async()=>{
    await dbconection.connect()
    console.log("server startedon the port 3000")
})