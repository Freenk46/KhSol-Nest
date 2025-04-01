import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Basket, BasketDocument } from './basket.schema';

@Injectable()
export class BasketService {
   constructor(
      @InjectModel(Basket.name) private basketModel: Model<BasketDocument>,
   ) { }

   async createBasket(data: { userId: string }): Promise<Basket> {
      const existing = await this.basketModel.findOne({ userId: data.userId });
      if (existing) {
         throw new HttpException('კალათა უკვე არსებობს', HttpStatus.BAD_REQUEST);
      }

      const basket = new this.basketModel({
         userId: data.userId,
         items: [],
         total: 0,
      });

      return basket.save();
   }

   async getBasketByUserId(userId: string): Promise<Basket | null> {
      return this.basketModel.findOne({ userId });
   }

   async addItem(userId: string, itemId: string): Promise<Basket> {
      const basket = await this.basketModel.findOne({ userId });
      if (!basket) {
         throw new HttpException('კალათა ვერ მოიძებნა', HttpStatus.NOT_FOUND);
      }

      basket.items.push(itemId);
      // სურვილის შემთხვევაში total განახლდეს აქ

      return basket.save();
   }

   async clearBasket(userId: string): Promise<Basket> {
      const basket = await this.basketModel.findOne({ userId });
      if (!basket) {
         throw new HttpException('კალათა ვერ მოიძებნა', HttpStatus.NOT_FOUND);
      }

      basket.items = [];
      basket.total = 0;
      return basket.save();
   }
}
