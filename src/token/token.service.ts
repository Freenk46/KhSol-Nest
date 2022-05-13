import { CreateTokenDto } from './dto/create-token.dto';
import { User } from './../users/users.model';
import { Token } from './token.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
   constructor(
      @InjectModel(Token) private tokenRepository: typeof Token,
      private jwtService: JwtService,
   ) { }
   async generateToken(user: User) {
      const payload = { email: user.email, id: user.id, roles: user.roles }
      return {
         accessToken: this.jwtService.sign(payload, { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '24h' }),
         refreshToken: this.jwtService.sign(payload, { secret: process.env.JWT_REFRES_SECRET, expiresIn: '30d' })
      }
   }
   async saveToken(dto: CreateTokenDto) {
      const userId = dto.userId
      const tokenData = await this.tokenRepository.findOne({ where: { userId } });
      if (tokenData) {
         return await this.tokenRepository.update(dto, { where: { userId } });
      }
      console.log("xuiii")
      return await this.tokenRepository.create(dto);
   }

}

