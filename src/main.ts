import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('Proyecto Backend api rest')
    .setVersion('1.0')
    .addTag('node')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  // end swagger

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
