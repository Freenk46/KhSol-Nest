import { User } from './../users/users.model';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
   providers: [ProfileService],
   controllers: [ProfileController],
   imports: [
      SequelizeModule.forFeature([User,
         Profile,]),
   ],
   exports: [
      ProfileService
   ]

})

export class ProfileModule { }
