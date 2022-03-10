import { Procedure } from './../procedures/procedure.model';
import { Basket } from './basket.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";



@Table({ tableName: 'procedure-basket' })
export class ProcedureBasket extends Model<ProcedureBasket> {


   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ForeignKey(() => Procedure)
   @Column({ type: DataType.INTEGER })
   procedureId: number;

   @ForeignKey(() => Basket)
   @Column({ type: DataType.INTEGER })
   basketId: number;

   @BelongsTo(() => Basket)
   basket: Basket[]

   @BelongsTo(() => Procedure)
   procedure: Procedure[];


}