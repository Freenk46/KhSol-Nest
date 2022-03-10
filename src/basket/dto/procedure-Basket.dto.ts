import { ApiProperty, } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
export class ProcedureBasketDto {
   @ApiProperty({ example: '1', description: 'მომხმარებლის იდენტიფიკატორი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვები' })
   readonly basketId: number

   @ApiProperty({ example: '1', description: 'პროცედურის იდენტიფიკატორი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვები' })
   readonly procedureId: number
}