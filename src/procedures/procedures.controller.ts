import { UpdateClassDto } from './dto/updateType.dto';
import { UpdateTypeDto } from './dto/updateClass.dto';
import { ProcedureType } from './procedure-type.model';
import { ProcedureClass } from './procedure-class.model';
import { addClassDto } from './dto/add-class.dto';
import { addTypeDto } from './dto/add-type.dto';
import { ProceduresService } from './procedures.service';
import { Procedure } from './procedure.model';
import { addProcedureDto } from './dto/add-procedure.dto';
import { Body, Controller, Post, Get, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
@ApiTags('Procedures')
@Controller('procedures')
export class ProceduresController {

   constructor(private procedureService: ProceduresService) { }

   @ApiOperation({ summary: 'პროცედურის დამატება' })
   @ApiResponse({ status: 200, type: Procedure })
   @Post()
   addProcedure(@Body() procedureDto: addProcedureDto) {
      return this.procedureService.addProcedure(procedureDto)
   }

   @ApiOperation({ summary: 'პროცედურის ტიპის  დამატება' })
   @ApiResponse({ status: 200, type: ProcedureType })
   @Post('/type')
   addType(@Body() typeDto: addTypeDto) {
      return this.procedureService.addProcedureType(typeDto)
   }

   @ApiOperation({ summary: 'პროცედურის კატეგორიის დამატება' })
   @ApiResponse({ status: 200, type: ProcedureClass })
   @Post('/class')
   addClass(@Body() classDto: addClassDto) {
      return this.procedureService.addProcedureClass(classDto)
   }
   @ApiOperation({ summary: 'ყველა კატეგორიის მოთხოვნა' })
   @ApiResponse({ status: 200, type: ProcedureClass })
   @Get('/class')
   getAllClass() {
      return this.procedureService.getAllClass()
   }

   @ApiOperation({ summary: 'ყველა ტიპის მოთხოვნა' })
   @ApiResponse({ status: 200, type: ProcedureType })
   @Get('/type')
   getAllType() {
      return this.procedureService.getAllType()
   }


   @ApiOperation({ summary: 'ყველა პროცედურის მოთხოვნა' })
   @ApiResponse({ status: 200, type: [Procedure] })
   @Get()
   getAll() {
      return this.procedureService.getAllProcedure()
   }

   @ApiOperation({ summary: 'პროცედურის ტიპის  განახლება' })
   @ApiResponse({ status: 200, type: ProcedureType })
   @Put('/type')
   updateType(@Body() dto: UpdateTypeDto) {
      return this.procedureService.UpdateProcedureType(dto);
   }

   @ApiOperation({ summary: 'პროცედურის კატეგორიის  განახლება' })
   @ApiResponse({ status: 200, type: ProcedureClass })
   @Put('/class')
   updateClass(@Body() dto: UpdateClassDto) {
      return this.procedureService.UpdateProcedureClass(dto);
   }

   @ApiOperation({ summary: 'პროცედურის   განახლება' })
   @ApiResponse({ status: 200, type: ProcedureClass })
   @Put()
   updateProcedure(@Body() dto: UpdateProcedureDto) {
      return this.procedureService.UpdateProcedure(dto);
   }

}
