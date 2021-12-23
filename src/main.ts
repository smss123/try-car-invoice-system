import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initlizer, InitSwagger } from './Utils/BootstrapperUtils';
import { HttpExceptionFilter } from './Utils/HttpExceptionFilter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
await initlizer(app);
  await app.listen(3000);
}
bootstrap();
