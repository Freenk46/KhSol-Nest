import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class BanUserDto {
   @IsMongoId()
   userId!: string;

   @IsString()
   @IsNotEmpty()
   banReason!: string;
}
