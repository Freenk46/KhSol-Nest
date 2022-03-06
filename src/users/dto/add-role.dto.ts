import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class AddRoleDto {
   @ApiProperty({ example: 'ADMIN', description: 'როლი' })
   @IsString({ message: "უნდა იყოს  სტრიქონი" })
   readonly value: string;
   @ApiProperty({ example: '1', description: 'მომხმარებლის Id' })
   @IsNumber({}, { message: "უნდა იყოს რიცხვი" })
   readonly userId: number;
}