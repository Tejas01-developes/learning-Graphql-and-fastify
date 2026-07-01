import { logintype, registerusertype } from "./interfaces";
export declare const resolver: {
    Mutation: {
        adduser1: (_parent: any, args: registerusertype, _ctx: any) => Promise<{
            success: boolean;
            message: string;
        }>;
        adduser2: (_parent: any, args: logintype, _ctx: any) => Promise<{
            success: boolean;
            message: string;
        }>;
    };
    Query: {
        getuser: (_parent: any, _args: any, _ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
            email: string;
            name: string;
            password: string;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            email: string;
            name: string;
            password: string;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[]>;
    };
    user2: {
        result: (parent: any, _args: any, _ctx: any) => Promise<any[]>;
    };
    Subscription: {
        useradded: {
            subscribe: (_parent: any, _args: any, ctx: any) => Promise<any>;
        };
    };
};
//# sourceMappingURL=controller.d.ts.map