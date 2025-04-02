import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
   @Prop({ required: true, unique: true })
   email!: string;

   @Prop({ required: true })
   password!: string;

   // @Prop({ required: true })
   //  activationLink!: string;

   @Prop({ default: false })
   isBanned!: boolean;

   @Prop()
   banReason?: string;

   @Prop({ type: [String], default: [] })
   roles!: string[];
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);