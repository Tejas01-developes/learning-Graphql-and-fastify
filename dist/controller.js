"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryapi = void 0;
const schema_1 = require("./schema");
const schema2_1 = require("./schema2");
exports.queryapi = {
    Mutation: {
        registeruser: async (_parent, args, _context, _info) => {
            const { email, password } = args;
            if (!email || !password) {
                throw new Error("User details missing");
            }
            try {
                await schema_1.collection1.create({ email, password });
                return {
                    success: true,
                    message: "user registered"
                };
            }
            catch (err) {
                console.error(err);
                throw new Error("register api failed");
            }
        },
        register2: async (_parent, args, _context, _info) => {
            const { name, email, age } = args;
            if (!name || !email || !age) {
                throw new Error("User details missing");
            }
            try {
                await schema2_1.collection2.create({ name, email, age });
                return {
                    success: true,
                    message: "user2 registered"
                };
            }
            catch (err) {
                return {
                    success: false,
                    message: "register failed"
                };
            }
        }
    },
    Query: {
        getusers: async (_parent, _args, _context, _info) => {
            const res = await schema_1.collection1.find();
            if (res.length === 0) {
                return {
                    success: false,
                    message: "No users in the database"
                };
            }
            return res;
        },
        getusers2: async (_parent, _arges, _context, _info) => {
            const res = await schema2_1.collection2.find();
            if (res.length === 0) {
                return {
                    success: false,
                    message: "no user in the list"
                };
            }
            return res;
        },
        getusers3: async (_parent, _args, _context) => {
            const res = await schema_1.collection1.aggregate([
                { $lookup: {
                        from: "user2",
                        localField: "email",
                        foreignField: "email",
                        as: "resultt"
                    } }
            ]);
            if (res.length === 0) {
                return {
                    success: false,
                    message: "result is empty"
                };
            }
            return res;
        }
    }
};
//# sourceMappingURL=controller.js.map