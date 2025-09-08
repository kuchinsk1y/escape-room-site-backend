import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { QuestModule } from './quests/quest.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, QuestModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
