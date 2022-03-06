import { ApiProperty, } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
export class CreateBasketDto {
   @ApiProperty({ example: '1', description: 'მომხმარებლის იდენტიფიკატორი' })
   @IsNumber({}, { message: ' უნდა იყოს რიცხვები' })
   readonly userId: number
}