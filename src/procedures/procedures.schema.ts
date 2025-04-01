import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProcedureDocument = Procedure & Document;

@Schema({ timestamps: true })
export class Procedure {
   @Prop({ required: true })
   title!: string;

   @Prop()
   description!: string;

   @Prop({ required: true })
   price!: number;

   @Prop()
   imageUrl?: string;

   @Prop()
   category!: string;

   @Prop({ default: true })
   isActive!: boolean;
}

export const ProcedureSchema = SchemaFactory.createForClass(Procedure);
