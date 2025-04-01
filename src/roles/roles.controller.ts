import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
   constructor(private readonly rolesService: RolesService) { }

   @Post()
   @UsePipes(ValidationPipe)
   async create(@Body() dto: CreateRoleDto) {
      return this.rolesService.createRole(dto.value, dto.description);
   }

   @Get()
   async getAll() {
      return this.rolesService.getAllRoles();
   }
}
