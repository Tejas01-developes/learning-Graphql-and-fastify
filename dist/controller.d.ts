interface RegisterArgs {
    name?: string;
    age?: number;
    email?: string;
    password?: string;
}
interface Register2 {
    name?: string;
    age?: number;
    email?: string;
}
export declare const queryapi: {
    Mutation: {
        registeruser: (_parent: any, args: RegisterArgs, _context: any, _info: any) => Promise<{
            success: boolean;
            message: string;
        }>;
        register2: (_parent: any, args: Register2, _context: any, _info: any) => Promise<{
            success: boolean;
            message: string;
        }>;
    };
    Query: {
        getusers: (_parent: any, _args: RegisterArgs, _context: any, _info: any) => Promise<any[] | {
            success: boolean;
            message: string;
        }>;
        getusers2: (_parent: any, _arges: any, _context: any, _info: any) => Promise<any[] | {
            success: boolean;
            message: string;
        }>;
        getusers3: (_parent: any, _args: any, _context: any) => Promise<any[] | {
            success: boolean;
            message: string;
        }>;
    };
};
export {};
//# sourceMappingURL=controller.d.ts.map