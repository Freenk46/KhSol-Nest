import { ProcedureBasket } from 'src/basket/procedure-basket.model';
import { Basket } from './basket/basket.model';
import { ProcedureGender } from './procedures/procedure-gender.model';
import { ProcedureType } from './procedures/procedure-type.model';
import { ProcedureClass } from './procedures/procedure-class.model';
import { Procedure } from './procedures/procedure.model';
import { UserRoles } from './roles/user-roles.model';
import { Role } from './roles/roles.model';
import { User } from './users/users.model';
import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.model';
import { ProceduresModule } from './procedures/procedures.module';
import { BasketService } from './basket/basket.service';
import { BasketController } from './basket/basket.controller';
import { BasketModule } from './basket/basket.module';

@Module({
   controllers: [],
   providers: [],
   imports: [

      ConfigModule.forRoot({
         envFilePath: `.${process.env.NODE_ENV}.env`

      }),
      SequelizeModule.forRoot({
         dialect: 'postgres',
         host: process.env.POSTGRES_HOST,
         port: Number(process.env.POSTGRES_PORT),
         username: process.env.POSTGRES_USER,
         password: process.env.POSTGRES_PASSWORD,
         database: process.env.POSTGRES_DB,
         models: [User, Role, UserRoles, Profile, Procedure, ProcedureClass, ProcedureType, ProcedureGender, Basket, ProcedureBasket],
         autoLoadModels: true
      }),
      UsersModule,
      RolesModule,
      AuthModule,
      ProfileModule,
      ProceduresModule,
      BasketModule,
   ]
})
export class AppModule { }
