import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  var express = require('express')
  
  const corsOptions: CorsOptions = {
    origin: '*', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  };


  app.enableCors(corsOptions);
  app.use(express.json())
  await app.listen(5000);
}
bootstrap();
