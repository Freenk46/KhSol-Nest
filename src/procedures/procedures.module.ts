import { ProcedureGender } from './procedure-gender.model';
import { ProcedureType } from './procedure-type.model';
import { ProcedureClass } from './procedure-class.model';
import { Procedure } from './procedure.model';
import { ProceduresController } from './procedures.controller';
import { ProceduresService } from './procedures.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProcedureBasket } from 'src/basket/procedure-basket.model';


@Module({
   providers: [ProceduresService],
   controllers: [ProceduresController],
   imports: [
      SequelizeModule.forFeature([
         ProcedureBasket,
         Procedure, ProcedureClass, ProcedureType,
         ProcedureGender]),
   ],
   exports: [
      ProceduresService
   ]

})

export class ProceduresModule { }
