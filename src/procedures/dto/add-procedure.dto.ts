import { ApiProperty, } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class addProcedureDto {
   @ApiProperty({ example: 'სული სხეულის ლაზერი', description: 'პროცედურის სახელი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly name: string

   @ApiProperty({ example: '30წ', description: 'პროცედურის ხანგრძლივობა' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly duration: number

   @ApiProperty({ example: '100₾', description: 'ფასი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly price: number

   @ApiProperty({ example: 'აღწერა', description: 'პროცედურის ინფორმაცია' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly info: string

   @ApiProperty({ example: '1', description: 'სქესი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly genderId: number

   @ApiProperty({ example: '3', description: 'პროცედურის ტიპი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly typeId: number

   @ApiProperty({ example: '5', description: 'პროცედურის კატეგორია' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვი' })
   readonly classId: number
}