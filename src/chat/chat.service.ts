// chat.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ChatMessage, ChatMessageDocument } from './chat.schema';
import { Model } from 'mongoose';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatMessage.name) private chatModel: Model<ChatMessageDocument>
  ) {}

  async getMessages(sessionId: string) {
    return this.chatModel.find({ sessionId }).sort({ createdAt: 1 }).exec();
  }

  async sendMessage(dto: SendMessageDto) {
    return this.chatModel.create(dto); // ✅ მხოლოდ ინახავს შეტყობინებას
  }
}
