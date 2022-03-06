import { ApiProperty, } from '@nestjs/swagger';
import { IsString, Length, IsNumber } from 'class-validator';
export class UpdateProfileDto {
   @ApiProperty({ example: 'გიორგი', description: 'სახელი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly name: string

   @ApiProperty({ example: '24', description: 'ასაკი' })
   @IsString({ message: ' უნდა იყოს რიცხვი' })
   readonly age: number


   @ApiProperty({ example: 'ბერიძე', description: 'გვარი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly lastname: string

   @ApiProperty({ example: 'ბათუმი', description: 'ქალაქი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly city: string

   @ApiProperty({ example: 'საქართველო', description: 'ქვეყანა' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly country: string

   @ApiProperty({ example: '12345678', description: 'ნომერი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვები' })
   @Length(9, 9, { message: 'უნდა იყოს 9' })
   readonly phone: number

   @ApiProperty({ example: '1', description: 'მომხმარებლის იდენტიფიკატორი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვები' })
   readonly userId: number

}