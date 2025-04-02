import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.tdo';

@Controller('users')
export class UsersController {
   constructor(private readonly usersService: UsersService) { }

   @Post()
   @UsePipes(ValidationPipe)
   async create(@Body() dto: CreateUserDto) {
      return this.usersService.createUser(dto);
   }

   @Get()
   async getAll() {
      return this.usersService.getAllUsers();
   }

   @Post('/role')
   @UsePipes(ValidationPipe)
   async addRole(@Body() dto: AddRoleDto) {
      return this.usersService.addRole(dto);
   }

   @Post('/ban')
   @UsePipes(ValidationPipe)
   async ban(@Body() dto: BanUserDto) {
      return this.usersService.ban(dto);
   }
}
