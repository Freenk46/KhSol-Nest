import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class AddRoleDto {
   @IsMongoId({ message: 'არასწორი მომხმარებლის ID' })
   userId!: string;

   @IsString({ message: 'როლის მნიშვნელობა უნდა იყოს ტექსტური' })
   @IsNotEmpty({ message: 'როლის ველი ცარიელი არ უნდა იყოს' })
   value!: string;
}
