// send-message.dto.ts
export class SendMessageDto {
    sessionId?: string;
    text?: string ;
    sender?: 'user' | 'bot';
    type?: 'text';
    tempId ?:string
    // tempId არ არის საჭირო DB-სთვის, მაგრამ Frontend ack-სთვის საჭიროა
  }
  