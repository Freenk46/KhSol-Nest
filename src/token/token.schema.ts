import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema({ timestamps: true })
export class Token {
   @Prop({ required: true, unique: true })
   userId!: string;

   @Prop({ required: true })
   refreshToken!: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
