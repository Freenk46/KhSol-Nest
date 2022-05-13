import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';




@Injectable()
export class MailService {
   constructor(private readonly mailerService: MailerService) { }


   async sendActivationMail(to: string, link: string) {

      this.mailerService
         .sendMail({
            to,
            from: process.env.SMTP_USER,
            subject: 'აქაუნთის გააქტიურება✔' + process.env.API_URL,
            text: '',
            html: `
               <div> 
               <h1> აქტივაციისთვის  გადადით ლინკზე  </h1>
               <a href="${link}">${link} </a>
               </div>
            `,
         })
         .then(() => { })
         .catch(() => { });
   }
}
