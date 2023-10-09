// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use your provided MongoDB connection string
  const mongodbUri = 'mongodb+srv://sindhu:<uhdniS@9164>@cluster0.0eyysvl.mongodb.net/form';

  // Connect to MongoDB
  await mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await app.listen(3000);
}
bootstrap();
