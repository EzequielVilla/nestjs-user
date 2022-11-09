import { Module } from '@nestjs/common';

import { UsersController } from 'src/controllers/users.controller';
import { AppService } from 'src/services/app.service';
import { UsersService } from 'src/services/users.service';
import { AppModule } from './app.module';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, AppService],
})
export class UsersModule {}
