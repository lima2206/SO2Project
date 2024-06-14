import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), DatabaseModule, ItemsModule, UsersModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
