import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

const bullModule = BullModule.forRoot(mailBullConfig);
@Module({
   providers: [MailService],
   controllers: [],
   imports: [
      bullModule,
      MailerModule.forRoot({
         defaults: {
            from: process.env.SMTP_USER,
         },
         transport: {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            ignoreTLS: true,
            auth: {
               user: process.env.SMTP_USER,
               password: process.env.SMTP_PASSWORD
            }
         },
         preview: true,
         template: {
            dir: process.cwd() + '/template/',
            adapter: new HandlebarsAdapter(),
            options: {
               strict: true,
            },
         },
      }),
   ],
   exports: [
      MailService,
      MailerModule,
      bullModule
   ]
})
export class MailModule { }

function mailBullConfig(mailBullConfig: any) {
   throw new Error('Function not implemented.');
}

