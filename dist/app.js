"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const formbody_1 = __importDefault(require("@fastify/formbody"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const helmet_1 = __importDefault(require("@fastify/helmet"));
const dbconection_1 = __importDefault(require("./dbconection"));
// import { routes } from "./route";
const mercurius_1 = __importDefault(require("mercurius"));
const controller_1 = require("./controller");
const app = (0, fastify_1.default)({ logger: true });
app.register(formbody_1.default);
app.register(cookie_1.default);
app.register(helmet_1.default);
const graphqlschema = `
type RegisterResponse {
    success:Boolean!
    message:String!
}

type Mutation {
registerUser(email:String!,password:String!):RegisterResponse
}

type Query {
    _empty: String
}
`;
app.register(mercurius_1.default, {
    schema: graphqlschema,
    resolvers: controller_1.registeruser,
    graphiql: true
});
app.listen({ port: 3000 }, async () => {
    await dbconection_1.default.connect();
    console.log("server startedon the port 3000");
});
//# sourceMappingURL=app.js.map