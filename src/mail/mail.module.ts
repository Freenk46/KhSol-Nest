import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
   imports: [
      MailerModule.forRoot({
         transport: {
            service: 'gmail',
            auth: {
               user: process.env.SMTP_USER,
               pass: process.env.SMTP_PASSWORD,
            },
         },
         defaults: {
            from: `"KhSol Support" <${process.env.SMTP_USER}>`,
         },
         template: {
            dir: join(__dirname, 'templates'),
            adapter: new HandlebarsAdapter(),
            options: {
               strict: true,
            },
         },
      }),
   ],
   providers: [MailService],
   exports: [MailService],
})
export class MailModule { }
