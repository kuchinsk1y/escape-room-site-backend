import { PrismaService } from '../prisma/prisma.service';
export declare class UserDataService {
    private prisma;
    constructor(prisma: PrismaService);
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
