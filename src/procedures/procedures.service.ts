import { ProcedureType } from './procedure-type.model';
import { ProcedureClass } from './procedure-class.model';
import { addClassDto } from './dto/add-class.dto';
import { addTypeDto } from './dto/add-type.dto';
import { addProcedureDto } from './dto/add-procedure.dto';
import { Procedure } from './procedure.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProceduresService {
   constructor(
      @InjectModel(Procedure) private ProcedureRepository: typeof Procedure,
      @InjectModel(ProcedureType) private TypeRepository: typeof ProcedureType,
      @InjectModel(ProcedureClass) private ClassRepository: typeof ProcedureClass,

   ) { }
   async addProcedure(dto: addProcedureDto) {
      const procedure = await this.ProcedureRepository.create(dto)
      return procedure;
   }
   async getAllProcedure() {
      const procedure = await this.ProcedureRepository.findAll({ include: { all: true } });
      return procedure;

   }
   async addProcedureType(dto: addTypeDto) {
      const type = await this.TypeRepository.create(dto)
      return type;

   }
   async addProcedureClass(dto: addClassDto) {
      const procedureClass = await this.ClassRepository.create(dto)
      return procedureClass;
   }
   async getAllClass() {
      const procedureClass = await this.ClassRepository.findAll();
      return procedureClass;
   }
   async getAllType() {
      const procedureClass = await this.TypeRepository.findAll();
      return procedureClass;
   }
}
