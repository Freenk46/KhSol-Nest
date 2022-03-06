import { BasketService } from './basket.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Basket')
@Controller('basket')
export class BasketController {
   constructor(private basketService: BasketService) { }

   ApiOperation({ summary: 'მომხმარებლის კალათის სრულიად წამოღება' })
   @ApiResponse({ status: 200 })
   @Get('/:Id')
   getBasket(@Param('Id') id: number) {
      return this.basketService.getProfile(id);
   }

}
