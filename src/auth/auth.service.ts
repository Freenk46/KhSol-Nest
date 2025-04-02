import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as uuid from 'uuid';

import { UsersService } from '../users/users.service';
import { TokenService } from '../token/token.service';
import { MailService } from '../mail/mail.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserDocument } from '../users/users.schema';

@Injectable()
export class AuthService {
   constructor(
      private readonly userService: UsersService,
      private readonly jwtService: JwtService,
      private readonly tokenService: TokenService,
      private readonly mailService: MailService,
   ) { }

   async login(userDto: CreateUserDto) {
      const user = await this.validateUser(userDto) as UserDocument;
      const tokens = await this.tokenService.generateToken(user);

      await this.tokenService.saveToken({
         userId: user._id.toString(),
         refreshToken: tokens.refreshToken,
      });

      return {
         ...tokens,
         user,
      };
   }

   async registration(userDto: CreateUserDto) {
      const candidate = await this.userService.findByEmail(userDto.email);
      if (candidate) {
         throw new HttpException('მომხმარებელი ასეთი ელექტრონული მისამართით უკვე არსებობს', HttpStatus.BAD_REQUEST);
      }

      const hashPassword = await bcrypt.hash(userDto.password, 5);
      const activationLink = uuid.v4();

      const user = await this.userService.createUser({
         ...userDto,
         password: hashPassword,
         //  activationLink,
      });

      await this.mailService.sendActivationMail(user.email, activationLink);

      const tokens = await this.tokenService.generateToken(user);
      await this.tokenService.saveToken({
         userId: user._id.toString(),
         refreshToken: tokens.refreshToken,
      });

      return {
         ...tokens,
         user,
      };
   }

   private async validateUser(userDto: CreateUserDto) {
      const user = await this.userService.findByEmail(userDto.email);
      if (!user) {
         throw new UnauthorizedException('მომხმარებელი ვერ მოიძებნა');
      }

      const passwordEquals = await bcrypt.compare(userDto.password, user.password);
      if (!passwordEquals) {
         throw new UnauthorizedException('არასწორი პაროლი');
      }

      return user;
   }
}
