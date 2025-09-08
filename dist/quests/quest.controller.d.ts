import { QuestService } from './quest.service';
import { CreateQuestDto } from './dto/create-quest.dto';
export declare class QuestController {
    private readonly questService;
    constructor(questService: QuestService);
    getAllQuests(): import("generated/prisma").Prisma.PrismaPromise<{
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
    createQuest(body: CreateQuestDto, file: Express.Multer.File): Promise<{
        id: number;
        title: string;
        description: string;
        theme: string;
        duration: number;
        players: number;
        difficulty: string;
        image: string | null;
        is_active: boolean;
    }>;
}
