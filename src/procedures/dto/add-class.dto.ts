import { ApiProperty, } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class addClassDto {
   @ApiProperty({ example: 'სული სხეულის ლაზერი', description: 'პროცედურის კატეგორია' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly name: string

}