import {
  Body,
   Controller,
   Post,
   Req,
   Res,
 } from '@nestjs/common';
 import { AuthService } from './auth.service';
 import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
 
 @Controller('auth')
 export class AuthController {
   constructor(private readonly authService: AuthService) {}
   @Post('login')
   async login(@Body() dto: CreateUserDto, @Res() res: Response) {
     const data = await this.authService.login(dto);
   
     res
       .cookie('refreshToken', data.refreshToken, {
         httpOnly: true,
         secure: true,
         sameSite: 'lax',
         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 დღე
       })
       .json({
         accessToken: data.accessToken,
         user: data.user,
       });
   }
 
   @Post('refresh')
   async refresh(@Req() req: Request, @Res() res: Response) {
     const refreshToken = req.cookies?.refreshToken;
 
     if (!refreshToken) {
       return res.status(401).json({ message: 'Refresh token missing' });
     }
 
     try {
       const data = await this.authService.refreshTokens(refreshToken);
 
       return res
         .cookie('refreshToken', data.refreshToken, {
           httpOnly: true,
           secure: true,
           sameSite: 'lax',
           maxAge: 7 * 24 * 60 * 60 * 1000, // 7 დღე
         })
         .json({
           accessToken: data.accessToken,
           user: data.user,
         });
     } catch (e) {
       return res.status(401).json({ message: 'Invalid token' });
     }
   };
  
   @Post('logout')
async logout(@Req() req: Request, @Res() res: Response) {
  const refreshToken = req.cookies?.refreshToken;
  if (refreshToken) {
    await this.authService.logout(refreshToken);
  }

  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return res.status(200).json({ message: 'Logged out successfully' });
}

 }
 