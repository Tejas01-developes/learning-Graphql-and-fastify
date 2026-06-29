"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const schema_1 = require("./schema");
const schema2_1 = require("./schema2");
exports.resolver = {
    Mutation: {
        adduser1: async (_parent, args, _ctx) => {
            const { name, email, password } = args;
            await schema2_1.collection2.create({ name, email, password });
            return {
                success: true,
                message: "user added"
            };
        },
        adduser2: async (_parent, args, _ctx) => {
            const { email, age } = args;
            await schema_1.collection1.create({ email, age });
            return {
                success: true,
                message: "user added"
            };
        }
    },
    Query: {
        getuser: async (_parent, _args, _ctx) => {
            // const res:any[]=await collection2.aggregate([
            // {$lookup:{
            //   from:"users",
            //   localField:"email",
            //   foreignField:"email",
            //   as:"result"
            // }}
            // ])
            const res = await schema2_1.collection2.find();
            return res;
        }
    },
    user2: {
        result: async (parent, _args, _ctx) => {
            const target = parent.email;
            const res = await schema_1.collection1.find({ email: target });
            return res;
        }
    }
};
//# sourceMappingURL=controller.js.map