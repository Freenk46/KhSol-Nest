import { TokenService } from './../token/token.service';
import { User } from './../users/users.model';
import { UsersService } from './../users/users.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import * as uuid from "uuid";
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
   constructor(private userService: UsersService,
      private jwtService: JwtService,
      private tokenService: TokenService,
      private mailService: MailService
   ) { }

   async login(userDto: CreateUserDto) {
      const user = await this.validateUser(userDto)
      const tokens = await this.tokenService.generateToken(user)
      await this.tokenService.saveToken({ userId: user.id, refreshToken: tokens.refreshToken })
      return {
         ...tokens,
         user
      }
   }
   async registration(userDto: CreateUserDto) {
      const candidate = await this.userService.getUserEmail(userDto.email)
      if (candidate) {
         throw new HttpException('მომხმარებელი ასეთი ელექტრონული მისამართით უკვე არსებობს', HttpStatus.BAD_REQUEST)
      }
      const hashPassword = await bcrypt.hash(userDto.password, 5);
      const activationLink = uuid.v4();
      const user = await this.userService.createUser({ ...userDto, password: hashPassword, activationLink: activationLink })
      await this.mailService.sendActivationMail(userDto.email, `${process.env.API_URL}api/active/${activationLink}`)
      const tokens = await this.tokenService.generateToken(user)
      await this.tokenService.saveToken({ userId: user.id, refreshToken: tokens.refreshToken })
      return {
         ...tokens,
         user
      }
   }
   private async validateUser(userDto: CreateUserDto) {
      const user = await this.userService.getUserEmail(userDto.email);
      const passwordEquals = await bcrypt.compare(userDto.password, user.password);
      if (user && passwordEquals) {
         return user;
      }
      throw new UnauthorizedException({ message: 'პაროლი ან ელექტრონული მისამართი არასწორია ' })
   }
}


