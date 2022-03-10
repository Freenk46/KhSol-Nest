import { ProcedureType } from './procedure-type.model';
import { ProcedureClass } from './procedure-class.model';
import { addClassDto } from './dto/add-class.dto';
import { addTypeDto } from './dto/add-type.dto';
import { ProceduresService } from './procedures.service';
import { Procedure } from './procedure.model';
import { addProcedureDto } from './dto/add-procedure.dto';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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

}
