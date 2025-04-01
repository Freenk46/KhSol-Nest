import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenService } from './token.service';
import { Token, TokenSchema } from './token.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
      forwardRef(() => AuthModule),
   ],
   providers: [TokenService],
   exports: [TokenService],
})
export class TokenModule { }