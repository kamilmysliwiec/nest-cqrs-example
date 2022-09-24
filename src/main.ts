import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  const config = new DocumentBuilder()
    .setTitle('Heroes API')
    .setDescription('CQRS testing API')
    .setVersion('1.0')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/doc', app, document);  

  app.listen(3000, () => console.log('Application is listening on port 3000.'));
}
bootstrap();
