import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.tdo';
import { RolesService } from './../roles/roles.service';
import { ProfileService } from './../profile/profile.service';
import { BasketService } from './../basket/basket.service';

@Injectable()
export class UsersService {
   constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>,
      private roleService: RolesService,
      private profileService: ProfileService,
      private basketService: BasketService,
   ) { }

   async createUser(dto: CreateUserDto) {
      const createdUser = new this.userModel(dto);
      const user = await createdUser.save();

      const userId = user._id.toString();

      await this.profileService.createProfile({ userId });
      await this.basketService.createBasket({ userId });

      return user;
   }
   async findByEmail(email: string): Promise<User | null> {
      return this.userModel.findOne({ email });
   }
   async getAllUsers() {
      return this.userModel.find().exec();
   }

   async addRole(dto: AddRoleDto) {
      const user = await this.userModel.findById(dto.userId);
      if (!user) {
         throw new HttpException('მომხმარებელი არ მოიძებნა', HttpStatus.NOT_FOUND);
      }

      const role = await this.roleService.getRoleByValue(dto.value);
      if (!role) {
         throw new HttpException('როლი არ მოიძებნა', HttpStatus.NOT_FOUND);
      }

      if (!user.roles.includes(role.value)) {
         user.roles.push(role.value);
      }

      return user.save();
   }

   async ban(dto: BanUserDto) {
      const user = await this.userModel.findById(dto.userId);
      if (!user) {
         throw new HttpException('მომხმარებელი არ მოიძებნა', HttpStatus.NOT_FOUND);
      }

      user.isBanned = true;
      user.banReason = dto.banReason;
      return user.save();
   }
}
