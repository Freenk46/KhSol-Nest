import { ProcedureGender } from './../procedures/procedure-gender.model';
import { ProcedureType } from './../procedures/procedure-type.model';
import { ProcedureClass } from './../procedures/procedure-class.model';
import { Procedure } from './../procedures/procedure.model';
import { ProcedureBasket } from './../basket/procedure-basket.model';
import { BasketModule } from './../basket/basket.module';
import { Basket } from './../basket/basket.model';
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
    SequelizeModule.forFeature([
      User, Role, UserRoles,
      Profile, Basket, ProcedureBasket
    ]),
    RolesModule,
    ProfileModule,
    BasketModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UsersService,
    AuthModule,
  ]
})
export class UsersModule { }
