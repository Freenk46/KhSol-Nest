import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
   @Prop({ required: true, unique: true })
   userId!: string;

   @Prop()
   firstName?: string;

   @Prop()
   lastName?: string;

   @Prop()
   phone?: string;

   @Prop()
   avatarUrl?: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
