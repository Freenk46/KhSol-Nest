import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.use(cookieParser());
   // 🌐 CORS-ის ჩართვა (მნიშვნელოვანია თუ front-end უკავშირდება)
   app.enableCors({
      origin: ['http://localhost:3000', 'https://lasersola.com'],
      credentials: true,
    });
   app.setGlobalPrefix('api');
   // ✅ გლობალური ValidationPipe — class-validator + class-transformer მუშაობისთვის
   app.useGlobalPipes(
      new ValidationPipe({
         whitelist: true,             // ზედმეტი ველები მოიცილოს
         forbidNonWhitelisted: true, // ზედმეტი ველზე შეცდომა დააბრუნოს
         transform: true              // DTO-ში ავტომატურად გარდაქმნას request body
      }),
   );

   // 🚀 პორტის განსაზღვრა და აპის გაშვება
   const PORT = process.env.PORT || 3000;
   await app.listen(PORT);
   console.log(`🚀 Server started on http://localhost:${PORT}`);
}
bootstrap();
