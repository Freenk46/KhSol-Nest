import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// მოდულების შემოტანა
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ProfileModule } from './profile/profile.module';
import { BasketModule } from './basket/basket.module';
import { MailModule } from './mail/mail.module';
import { ProceduresModule } from './procedures/procedures.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { ChatModule } from './chat/chat.module';


@Module({
   imports: [
      // .env ფაილის ჩართვა
      ConfigModule.forRoot({
         isGlobal: true,
      }),

      // MongoDB კონფიგურაცია
      MongooseModule.forRoot(process.env.MONGO_URI!),

      // პროექტის მოდულები
      UsersModule,
      RolesModule,
      ProfileModule,
      BasketModule,
      MailModule,
      ProceduresModule,
      AuthModule,
      TokenModule,
      ChatModule
   ],
})
export class AppModule { }
