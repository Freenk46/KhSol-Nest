import { TokenService } from './token.service';
import { Token } from './token.model';
import { Module } from '@nestjs/common';
import { User } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
   providers: [TokenService],
   controllers: [],
   imports: [
      SequelizeModule.forFeature([User,
         Token,]),
      JwtModule.register({

      }),
   ],
   exports: [
      TokenService,
      JwtModule,
   ]
})
export class TokenModule {

}
