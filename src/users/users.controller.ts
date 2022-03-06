import { BanUserDto } from './dto/ban-user.tdo';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesGuard } from './../auth/roles.guard';
import { Roles } from './../auth/roles.decorator';
import { User } from './users.model';
import { Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Users')
@Controller('users')
export class UsersController {

   constructor(private usersService: UsersService) { }

   @ApiOperation({ summary: 'მომხმარებლის შექმნა' })
   @ApiResponse({ status: 200, type: User })
   @Post()
   create(@Body() userDto: CreateUserDto) {
      return this.usersService.createUser(userDto)
   }
   @ApiOperation({ summary: 'ყველა მომხმარებლის მიღება' })
   @ApiResponse({ status: 200, type: [User] })
   @Roles("ADMIN")
   @Get()
   getAll() {
      return this.usersService.getAllUsers()
   }
   @ApiOperation({ summary: 'უფლებების მინიჭება' })
   @ApiResponse({ status: 200 })
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Post('/role')
   addRole(@Body() dto: AddRoleDto) {
      return this.usersService.addRole(dto)
   }
   @ApiOperation({ summary: 'მომხმარებლის დაბლოკვა' })
   @ApiResponse({ status: 200 })
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Post('/ban')
   ban(@Body() dto: BanUserDto) {
      return this.usersService.ban(dto)
   }
}
