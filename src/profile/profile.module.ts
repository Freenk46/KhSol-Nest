import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './profile.schema';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
   ],
   providers: [ProfileService],
   controllers: [ProfileController],
   exports: [ProfileService],
})
export class ProfileModule { }
