import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: ['http://localhost:4200', 'http://localhost:4000', 'http://127.0.0.1:8080']
    
  })
  await app.listen(3000);
}
bootstrap();
