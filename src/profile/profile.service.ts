import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profile.schema';

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

   async updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile> {
      const profile = await this.profileModel.findOneAndUpdate(
         { userId },
         updates,
         { new: true },
      );

      if (!profile) {
         throw new HttpException('პროფილი ვერ განახლდა', HttpStatus.NOT_FOUND);
      }

      return profile;
   }
}
