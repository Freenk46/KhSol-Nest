import { Procedure } from './procedure.model';
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
interface ClassCreationAttrs {
   name: string;

}

@Table({ tableName: 'procedure-class' })
export class ProcedureClass extends Model<ProcedureClass, ClassCreationAttrs> {


   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, allowNull: false })
   name: string;


   @HasMany(() => Procedure)
   procedure: Procedure[]


}