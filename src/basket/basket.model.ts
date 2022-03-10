import { ProcedureBasket } from './procedure-basket.model';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from 'src/users/users.model';
interface BasketCreationAttrs {
   userId: number;

}

@Table({ tableName: 'basket' })
export class Basket extends Model<Basket, BasketCreationAttrs> {

   @ForeignKey(() => User)
   @Column({ type: DataType.INTEGER, unique: true })
   userId: number;


   @BelongsTo(() => User)
   user: User;

   @HasMany(() => ProcedureBasket)
   procedureBasket: ProcedureBasket[]

}