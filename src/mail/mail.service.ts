import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
   constructor(private readonly mailerService: MailerService) { }

   async sendActivationMail(email: string, activationLink: string) {
      await this.mailerService.sendMail({
         to: email,
         subject: 'KhSol - პროფილის აქტივაცია',
         template: 'activation', // სახელწოდება ჰბს ფაილის
         context: {
            activationLink,
         },
      });
   }
}
