import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Token, TokenDocument } from './token.schema';
import { User, UserDocument } from '../users/users.schema'; // თუ საჭიროა ტოკენში payload-სთვის
import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class TokenService {
   constructor(
      @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
      private jwtService: JwtService,
   ) { }

   async generateToken(user: UserDocument) {
      const payload = {
         id: user._id.toString(),
         email: user.email,
         roles: user.roles,
      };
      const accessToken = this.jwtService.sign(payload, {
         expiresIn: '15m',
      });

      const refreshToken = this.jwtService.sign(payload, {
         expiresIn: '7d',
      });

      return {
         accessToken,
         refreshToken,
      };
   }

   async saveToken(dto: CreateTokenDto): Promise<Token> {
      const tokenData = await this.tokenModel.findOne({ userId: dto.userId });

      if (tokenData) {
         tokenData.refreshToken = dto.refreshToken;
         return tokenData.save();
      }

      const token = new this.tokenModel(dto);
      return token.save();
   }

   async removeToken(refreshToken: string): Promise<void> {
      await this.tokenModel.deleteOne({ refreshToken });
   }

   async findToken(refreshToken: string): Promise<Token | null> {
      return this.tokenModel.findOne({ refreshToken });
   }
}
