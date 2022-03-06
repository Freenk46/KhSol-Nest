import { AuthService } from './auth.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
@ApiTags('ავტორიზაცია')
@Controller('auth')
export class AuthController {

   constructor(private authService: AuthService) {

   }
   @ApiOperation({ summary: 'შესვლა' })
   @Post('/login')
   login(@Body() userDto: CreateUserDto) {
      return this.authService.login(userDto)

   }
   @ApiOperation({ summary: 'რეგისტრაცია' })
   @Post('/registration')
   registration(@Body() userDto: CreateUserDto) {
      return this.authService.registration(userDto)

   }

}
