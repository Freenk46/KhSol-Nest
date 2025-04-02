import {
   Body,
   Controller,
   Get,
   Param,
   Patch,
   Post,
   Put,
   UseGuards,
   UsePipes,
   ValidationPipe,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
   constructor(private readonly profileService: ProfileService) { }

   @Post()
   @UsePipes(ValidationPipe)
   async create(@Body() dto: CreateProfileDto) {
      return this.profileService.createProfile(dto);
   }

   @Get(':userId')
   async getByUserId(@Param('userId') userId: string) {
      return this.profileService.getProfileByUserId(userId);
   }

   @Put(':id')
   // @UseGuards(JwtAuthGuard)
   @UsePipes(ValidationPipe)
   update(@Param('id') id: string, @Body() updateDto: UpdateProfileDto) {
      return this.profileService.update(id, updateDto);
   }
}
