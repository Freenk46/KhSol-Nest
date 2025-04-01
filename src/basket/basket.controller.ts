import {
   Body,
   Controller,
   Get,
   Param,
   Patch,
   Post,
   UsePipes,
   ValidationPipe,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { AddItemDto } from './dto/add-item.dto';

@Controller('basket')
export class BasketController {
   constructor(private readonly basketService: BasketService) { }

   @Post(':userId')
   async create(@Param('userId') userId: string) {
      return this.basketService.createBasket({ userId });
   }

   @Get(':userId')
   async getBasket(@Param('userId') userId: string) {
      return this.basketService.getBasketByUserId(userId);
   }

   @Patch(':userId/add')
   @UsePipes(ValidationPipe)
   async addItem(
      @Param('userId') userId: string,
      @Body() dto: AddItemDto,
   ) {
      return this.basketService.addItem(userId, dto.itemId);
   }

   @Patch(':userId/clear')
   async clearBasket(@Param('userId') userId: string) {
      return this.basketService.clearBasket(userId);
   }
}
