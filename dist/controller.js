"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registeruser = void 0;
const schema_1 = require("./schema");
exports.registeruser = {
    Mutation: {
        registeruser: async (_parent, args, context, _info) => {
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
        }
    }
};
//# sourceMappingURL=controller.js.map