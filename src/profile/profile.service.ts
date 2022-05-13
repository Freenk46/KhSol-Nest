import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
   constructor(
      @InjectModel(Profile) private profileRepository: typeof Profile) { }

   async createProfile(dto: CreateProfileDto) {
      const user = await this.profileRepository.create(dto);
      return user;
   }
   async getProfile(id: number) {
      const profile = await this.profileRepository.findOne({ where: { id } })
      return profile;

   }
   async UpdateProfile(dto: UpdateProfileDto) {
      const userId = dto.userId
      const user = await this.profileRepository.update(dto, { where: { userId } });
      return user;
   }
   async updateProfile(dto: UpdateProfileDto) {

   }
   async getProfilePhoto(id: number) {

   }
   async addProfilePhoto(Id: number) {

   }

}


