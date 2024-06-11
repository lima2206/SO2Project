import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), DatabaseModule, ItemsModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
