import { IsMongoId } from 'class-validator';

export class CreateBasketDto {
   @IsMongoId()
   userId!: string;
}
