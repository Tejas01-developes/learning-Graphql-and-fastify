"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const formbody_1 = __importDefault(require("@fastify/formbody"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const dbconection_1 = __importDefault(require("./dbconection"));
const mercurius_1 = __importDefault(require("mercurius"));
// import helmet from '@fastify/helmet'
const routeschema_1 = require("./routeschema");
const controller_1 = require("./controller");
const app = (0, fastify_1.default)({ logger: true });
app.register(formbody_1.default);
app.register(cookie_1.default);
// app.register(helmet)
app.register(mercurius_1.default, {
    schema: routeschema_1.queryschema,
    resolvers: controller_1.resolver,
    graphiql: true,
    subscription: true
});
app.listen({ port: 3000 }, async () => {
    await dbconection_1.default.connect();
    console.log("server startedon the port 3000");
});
//# sourceMappingURL=app.js.map