import { PrismaService } from '../prisma/prisma.service';
import { CreateQuestDto } from './dto/create-quest.dto';
export declare class QuestDataService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        theme: string;
        duration: number;
        players: number;
        difficulty: string;
        image: string | null;
        is_active: boolean;
    }[]>;
    create(data: CreateQuestDto): import("generated/prisma").Prisma.Prisma__QuestClient<{
        id: number;
        title: string;
        description: string;
        theme: string;
        duration: number;
        players: number;
        difficulty: string;
        image: string | null;
        is_active: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
