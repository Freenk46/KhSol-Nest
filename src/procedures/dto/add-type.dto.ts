import { ApiProperty, } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class addTypeDto {
   @ApiProperty({ example: 'ლაზერული ეპილაცია', description: 'პროცედურის ტიპი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly name: string

}