import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) { }

   @Post('/login')
   @UsePipes(ValidationPipe)
   async login(@Body() dto: CreateUserDto) {
      return this.authService.login(dto);
   }

   @Post('/registration')
   @UsePipes(ValidationPipe)
   async registration(@Body() dto: CreateUserDto) {
      return this.authService.registration(dto);
   }
}
