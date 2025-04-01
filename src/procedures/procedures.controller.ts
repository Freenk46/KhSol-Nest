import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
   UsePipes,
   ValidationPipe,
} from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';

@Controller('procedures')
export class ProceduresController {
   constructor(private readonly proceduresService: ProceduresService) { }

   @Post()
   @UsePipes(ValidationPipe)
   async create(@Body() dto: CreateProcedureDto) {
      return this.proceduresService.create(dto);
   }

   @Get()
   async getAll() {
      return this.proceduresService.getAll();
   }

   @Get(':id')
   async getById(@Param('id') id: string) {
      return this.proceduresService.getById(id);
   }

   @Patch(':id')
   @UsePipes(ValidationPipe)
   async update(
      @Param('id') id: string,
      @Body() dto: UpdateProcedureDto,
   ) {
      return this.proceduresService.update(id, dto);
   }

   @Delete(':id')
   async remove(@Param('id') id: string) {
      return this.proceduresService.delete(id);
   }
}
