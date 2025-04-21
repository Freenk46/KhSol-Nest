import {
   Controller,
   Post,
   Req,
   Res,
   UnauthorizedException,
 } from '@nestjs/common';
 import { AuthService } from './auth.service';
 import { Request, Response } from 'express';
 
 @Controller('auth')
 export class AuthController {
   constructor(private readonly authService: AuthService) {}
 
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
   }
 }
 