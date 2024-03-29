import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(Number(process.env.APP_PORT || 3000));
  console.log(`App is running on: ${JSON.stringify(await app.getUrl())}`);
}
bootstrap();
