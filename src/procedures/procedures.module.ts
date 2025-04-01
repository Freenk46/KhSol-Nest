import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProceduresController } from './procedures.controller';
import { ProceduresService } from './procedures.service';
import { Procedure, ProcedureSchema } from './procedures.schema';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: Procedure.name, schema: ProcedureSchema }]),
   ],
   controllers: [ProceduresController],
   providers: [ProceduresService],
   exports: [ProceduresService],
})
export class ProceduresModule { }
