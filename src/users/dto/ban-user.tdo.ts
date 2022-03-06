import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
   @ApiProperty({ example: '1', description: 'მომხმარებლის Id' })
   @IsNumber({}, { message: 'უნდა იყოს რიცხვი' })
   readonly userId: number;
   @ApiProperty({ example: 'ბილწსიტყვაობა', description: 'ბლოკირების მიზეზი' })
   @IsString({ message: ' უნდა იყოს სტრიქონი' })
   readonly BanReason: string;
}
