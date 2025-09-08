import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { QuestService } from './quest.service';
import { CreateQuestDto } from './dto/create-quest.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('quests')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @Get()
  getAllQuests() {
    return this.questService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createQuest(
    @Body() body: CreateQuestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.questService.createWithImage(body, file);
  }
}
