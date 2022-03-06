import { ApiProperty, } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
export class CreateUserDto {
   @ApiProperty({ example: 'მომხმარებელი@gmail.com', description: 'ელექტრონული მისამართი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   @IsEmail({}, { message: 'ელექტრონული მისამართ არასწორია' })
   readonly email: string
   @ApiProperty({ example: '12345678', description: 'პაროლი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   @Length(4, 16, { message: 'უნდა იყოს 4 ზე მეტი 16 ნაკლები' })
   readonly password: string
}