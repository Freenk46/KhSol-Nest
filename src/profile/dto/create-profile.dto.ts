import { IsString, IsOptional } from 'class-validator';

export class CreateProfileDto {
   @IsOptional()
   @IsString()
   firstName?: string;

   @IsOptional()
   @IsString()
   lastName?: string;

   @IsOptional()
   @IsString()
   phone?: string;

   @IsOptional()
   @IsString()
   address?: string;

   @IsString()
   userId?: string;
}
