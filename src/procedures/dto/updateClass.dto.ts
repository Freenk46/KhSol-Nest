import { ApiProperty, } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class UpdateTypeDto {
   @ApiProperty({ example: '1', description: 'უნიკალური იდენტიფიკატორი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly id: number

   @ApiProperty({ example: 'სრული სხეულის ლაზერი', description: 'პროცედურის კატეგორია' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly name: string

}