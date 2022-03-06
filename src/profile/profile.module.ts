import { User } from './../users/users.model';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

@Module({
   providers: [ProfileService],
   controllers: [ProfileController],
   imports: [
      SequelizeModule.forFeature([Profile, Role, UserRoles, User]),
   ],
   exports: [
      ProfileService
   ]

})

export class ProfileModule { }
