import { ProfileService } from './../profile/profile.service';
import { Profile } from './../profile/profile.model';
import { AuthModule } from './../auth/auth.module';
import { RolesModule } from './../roles/roles.module';
import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { User } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Profile]),
    RolesModule,
    ProfileModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UsersService,
    AuthModule,

  ]
})
export class UsersModule { }
