
import { AppModule } from './app.module.js';
import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.listen(4000);

  console.log('DevTrack API running on port 4000');
}

bootstrap();
