import { UserDataService } from './user.data-service';
export declare class UserService {
    private userData;
    constructor(userData: UserDataService);
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string | null;
        createdAt: Date;
    }[]>;
    create(data: {
        email: string;
        name?: string;
    }): import("generated/prisma").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string | null;
        createdAt: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
