import { QuestDataService } from './quest.data-service';
import { CreateQuestDto } from './dto/create-quest.dto';
import { AzureStorageService } from './azure-storage.service';
export declare class QuestService {
    private questData;
    private azureStorage;
    constructor(questData: QuestDataService, azureStorage: AzureStorageService);
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
    createWithImage(data: CreateQuestDto, file: Express.Multer.File): Promise<{
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
