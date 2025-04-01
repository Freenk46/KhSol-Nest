import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BasketDocument = Basket & Document;

@Schema({ timestamps: true })
export class Basket {
   @Prop({ required: true, unique: true })
   userId!: string;

   @Prop({ type: [String], default: [] })
   items!: string[]; // შეიძლება შეიცავდეს პროდუქტის ან პროცედურის ID-ებს

   @Prop({ default: 0 })
   total!: number;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);
