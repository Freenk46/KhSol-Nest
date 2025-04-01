import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Procedure, ProcedureDocument } from './procedures.schema';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';

@Injectable()
export class ProceduresService {
   constructor(
      @InjectModel(Procedure.name) private procedureModel: Model<ProcedureDocument>,
   ) { }

   async create(dto: CreateProcedureDto): Promise<Procedure> {
      const procedure = new this.procedureModel(dto);
      return procedure.save();
   }

   async getAll(): Promise<Procedure[]> {
      return this.procedureModel.find();
   }

   async getById(id: string): Promise<Procedure> {
      const procedure = await this.procedureModel.findById(id);
      if (!procedure) {
         throw new HttpException('პროცედურა ვერ მოიძებნა', HttpStatus.NOT_FOUND);
      }
      return procedure;
   }

   async update(id: string, dto: UpdateProcedureDto): Promise<Procedure> {
      const procedure = await this.procedureModel.findByIdAndUpdate(id, dto, {
         new: true,
      });
      if (!procedure) {
         throw new HttpException('განახლება ვერ მოხერხდა', HttpStatus.NOT_FOUND);
      }
      return procedure;
   }

   async delete(id: string): Promise<void> {
      await this.procedureModel.findByIdAndDelete(id);
   }
}
