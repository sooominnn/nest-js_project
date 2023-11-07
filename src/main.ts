import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestJs 어플리케이션은 main.ts에서 시작함
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 하나의 모듈에서 어플리케이션 생성함
  await app.listen(3001);
}
bootstrap();
