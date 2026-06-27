interface RegisterArgs {
    email?: string;
    password?: string;
}
export declare const registeruser: {
    Mutation: {
        registeruser: (_parent: any, args: RegisterArgs, context: any, _info: any) => Promise<{
            success: boolean;
            message: string;
        }>;
    };
};
export {};
//# sourceMappingURL=controller.d.ts.map