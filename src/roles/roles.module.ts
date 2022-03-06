import { UserRoles } from './user-roles.model';
import { User } from './../users/users.model';
import { RolesController } from './roles.controller';
import { Role } from './roles.model';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from 'src/profile/profile.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles, Profile])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule { }
