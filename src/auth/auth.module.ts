import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { TokenModule } from '../token/token.module';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MailModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '1d' },
    }),
    UsersModule,
    forwardRef(() => TokenModule),
  ],

  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule { }


