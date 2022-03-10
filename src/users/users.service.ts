import { BasketService } from './../basket/basket.service';
import { ProfileService } from './../profile/profile.service';
import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.tdo';


@Injectable()
export class UsersService {
   constructor(
      @InjectModel(User) private userRepository: typeof User,
      private roleService: RolesService,
      private profileService: ProfileService,
      private basketService: BasketService,

   ) { }
   async createUser(dto: CreateUserDto,) {
      const user = await this.userRepository.create(dto);
      const userId = user.id
      await this.profileService.createProfile({ userId })
      await this.basketService.createBasket({ userId })
      const role = await this.roleService.getRoleByValue("USER")
      await user.$set('roles', [role.id])
      user.roles = [role]
      return user;
   }
   async getAllUsers() {
      const users = await this.userRepository.findAll({ include: { all: true } });
      return users;

   }
   async getUserEmail(email: string) {
      const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
      return user;
   }
   async addRole(dto: AddRoleDto) {
      const user = await this.userRepository.findByPk(dto.userId);
      const role = await this.roleService.getRoleByValue(dto.value);
      if (role && user) {
         await user.$add('role', role.id);
         return dto;
      }
      throw new HttpException('მომხმარებელი ან როლი არ მოიძებნა', HttpStatus.NOT_FOUND)
   }
   async ban(dto: BanUserDto) {
      const user = await this.userRepository.findByPk(dto.userId);
      if (!user) {
         throw new HttpException('მომხმარებელი არ მოიძებნა', HttpStatus.NOT_FOUND)
      }
      user.baned = true;
      user.banReason = dto.BanReason;
      await user.save();
      return user;
   }
}