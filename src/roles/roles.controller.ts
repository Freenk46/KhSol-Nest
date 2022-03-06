import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('როლი')
@Controller('roles')

export class RolesController {
   constructor(private roleService: RolesService) {
   }
   @ApiOperation({ summary: 'როლის დამატება' })
   @Post()
   create(@Body() dto: CreateRoleDto) {
      return this.roleService.createRole(dto);

   }
   @ApiOperation({ summary: 'როლის მოთხოვნა' })
   @Get('/:value')
   getByValue(@Param('value') value: string) {

      return this.roleService.getRoleByValue(value);


   }
}
