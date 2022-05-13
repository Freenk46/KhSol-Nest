import { AuthService } from './auth.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Response } from '@nestjs/common';

@ApiTags('ავტორიზაცია')
@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) {
   }
   @ApiOperation({ summary: 'ავტორიზაცია' })
   @Post('/login')
   async login(@Body() userDto: CreateUserDto,
   ) {
      const userData = this.authService.login(userDto)

      return userData
   }
   @ApiOperation({ summary: 'რეგისტრაცია' })
   @Post('/registration')
   async registration(@Body() userDto: CreateUserDto,
      @Response() res: any,
   ) {
      const userData = this.authService.registration(userDto)
      res.cookie('refreshToken', (await userData).refreshToken, {
         maxAge: 30 * 24 * 60 * 1000,
         httpOnly: true,
      });
      return userData
   }

}
