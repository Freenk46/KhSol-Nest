import { ProcedureBasketDto } from './dto/procedure-Basket.dto';
import { BasketService } from './basket.service';
import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Basket')
@Controller('basket')
export class BasketController {
   constructor(private basketService: BasketService) { }

   @ApiOperation({ summary: 'კალათაში დამატება' })
   @ApiResponse({ status: 200, type: ProcedureBasketDto })
   @Post()
   addBasket(@Body() dto: ProcedureBasketDto) {
      return this.basketService.addProcedureBasket(dto);
   }

   @ApiOperation({ summary: 'კალათაში დამატება' })
   @ApiResponse({ status: 200, type: ProcedureBasketDto })
   @Get('/:basketId')
   getAllProcedureById(@Param('basketId') basketId: number) {
      return this.basketService.getAllProcedureByBaskeId(basketId);
   }
}
