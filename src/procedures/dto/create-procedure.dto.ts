import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProcedureDto {
   @IsString()
   @IsNotEmpty()
   title!: string;

   @IsOptional()
   @IsString()
   description?: string;

   @IsNumber()
   price!: number;

   @IsOptional()
   @IsString()
   imageUrl!: string;

   @IsOptional()
   @IsString()
   category!: string;
}
