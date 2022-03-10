import { ProcedureBasket } from './procedure-basket.model';
import { Basket } from './basket.model';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from 'src/profile/profile.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';

@Module({

   providers: [BasketService],
   controllers: [BasketController],
   imports: [
      SequelizeModule.forFeature([Profile, Role, UserRoles, User, Basket, ProcedureBasket]),
   ],
   exports: [
      BasketService
   ]

})
export class BasketModule { }
