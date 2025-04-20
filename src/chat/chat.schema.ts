// chat.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatMessageDocument = ChatMessage & Document;

@Schema({ timestamps: true })
export class ChatMessage {
  @Prop({ required: true })
  sessionId?: string;

  @Prop()
  text?: string;

  @Prop({ enum: ['text', 'file', 'voice', 'system'], default: 'text' })
  type?: string;

  @Prop({ enum: ['user', 'bot', 'operator'], default: 'user' })
  sender?: string;

  @Prop()
  status?: string;

  @Prop()
  fileUrl?: string;
}

export const ChatMessageSchema = SchemaFactory.createForClass(ChatMessage);
