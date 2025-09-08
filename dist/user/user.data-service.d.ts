import { PrismaService } from '../prisma/prisma.service';
import { User } from './user.model';
export declare class UserDataService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    create(data: {
        email: string;
        password: string;
        name?: string | null;
    }): Promise<User>;
}
