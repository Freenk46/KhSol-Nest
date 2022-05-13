import { ApiProperty, } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class UpdateClassDto {
   @ApiProperty({ example: '1', description: 'უნიკალური იდენტიფიკატორი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly id: number

   @ApiProperty({ example: 'ლაზერული ეპილაცია', description: 'პროცედურის ტიპი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly name: string

}