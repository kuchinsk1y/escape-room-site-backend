import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string | null;
        createdAt: Date;
    }[]>;
    createUser(body: {
        email: string;
        name?: string;
    }): import("generated/prisma").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string | null;
        createdAt: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
