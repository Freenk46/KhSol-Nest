import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Put, Get, Param } from '@nestjs/common';
import { Profile } from './profile.model';
@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
   constructor(private profileService: ProfileService) { }

   @ApiOperation({ summary: 'პროფილის მოთხოვნა' })
   @ApiResponse({ status: 200 })
   @Get('/:Id')
   getProfile(@Param('Id') id: number) {
      return this.profileService.getProfile(id);
   }

   @ApiOperation({ summary: 'პროფილის განახლება' })
   @ApiResponse({ status: 200, type: Profile })
   @Put()
   update(@Body() dto: UpdateProfileDto) {
      return this.profileService.UpdateProfile(dto);
   }


   @ApiOperation({ summary: 'ფოტოს ატვირთვა' })
   @ApiResponse({ status: 200 })
   @Put('/photo')
   addPhoto(@Body() profileDto: UpdateProfileDto) {
   }


   @ApiOperation({ summary: 'ფოტოს მოთხოვნა' })
   @ApiResponse({ status: 200 })
   @Get('/photo/:Id')
   getPhoto(@Param('Id') id: number) {
      return this.profileService.getProfile(id);
   }



}
