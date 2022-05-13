import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class CreateTokenDto {
   @ApiProperty({ example: 'qwert', description: 'refreshToken' })
   @IsString({ message: "უნდა იყოს  სტრიქონი" })
   readonly refreshToken: string;
   @ApiProperty({ example: '1', description: 'მომხმარებლის Id' })
   @IsNumber({}, { message: "უნდა იყოს რიცხვი" })
   readonly userId: number;
}