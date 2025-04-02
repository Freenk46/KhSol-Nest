import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profile.schema';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
   constructor(
      @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
   ) { }

   async createProfile(data: { userId: string }): Promise<Profile> {
      const existing = await this.profileModel.findOne({ userId: data.userId });
      if (existing) {
         throw new HttpException('პროფილი ვერ შეიქმნა ', HttpStatus.BAD_REQUEST);
      }

      const profile = new this.profileModel(data);
      return profile.save();
   }

   async getProfileByUserId(userId: string): Promise<Profile | null> {
      return this.profileModel.findOne({ userId });
   }

   async update(id: string, updateDto: UpdateProfileDto): Promise<Profile> {
      const updated = await this.profileModel.findByIdAndUpdate(id, updateDto, { new: true });
      if (!updated) {
         throw new HttpException('პროფილი ვერ განახლდა', HttpStatus.BAD_REQUEST);
      }
      return updated;
   }
}
