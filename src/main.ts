import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';



async function start() {

   const PORT = process.env.PORT || 5000;
   const app = await NestFactory.create(AppModule)
   app.use(cookieParser());
   app.enableCors({
      origin: process.env.CLIENT_HOST,
      credentials: true,
   })

   const config = new DocumentBuilder()
      .setTitle('Back End Experiance')
      .setDescription('დოკუმენტაცია REST API')
      .setVersion('1.0.0')
      .addTag('BECK-NEST')
      .build()
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('/api/docs', app, document)

   await app.listen(PORT, () => console.log(`server started  =${PORT}`))

}
start()