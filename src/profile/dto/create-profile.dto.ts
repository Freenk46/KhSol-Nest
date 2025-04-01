import { IsMongoId } from 'class-validator';

export class CreateProfileDto {
   @IsMongoId()
   userId!: string;
}
