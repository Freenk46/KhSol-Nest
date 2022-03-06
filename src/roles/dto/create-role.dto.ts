import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
   @ApiProperty({ example: 'ADMIN', description: 'ახალი როლი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly value: string;
   @ApiProperty({ example: 'ადმინისტრატორი', description: 'როლის აღწერილობა' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly description: string;
}