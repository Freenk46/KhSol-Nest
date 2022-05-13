import { ProcedureBasket } from './procedure-basket.model';
import { ProcedureBasketDto } from './dto/procedure-Basket.dto';
import { CreateBasketDto } from './dto/create-baslet.dto';
import { Basket } from './basket.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BasketService {
   constructor(
      @InjectModel(Basket) private basketRepository: typeof Basket,
      @InjectModel(ProcedureBasket) private procedureBasketRepository: typeof ProcedureBasket
   ) { }
   async createBasket(dto: CreateBasketDto) {
      const basket = await this.basketRepository.create(dto);
      return basket;
   }
   async addProcedureBasket(dto: ProcedureBasketDto) {
      const procedurebasket = await this.procedureBasketRepository.create(dto);
      return procedurebasket;
   }
   async getAllProcedureByBaskeId(basketId: number) {
      const procedurebasket = await this.procedureBasketRepository.findAll({ where: { basketId }, include: { all: true } })
      return procedurebasket;
   }
}
