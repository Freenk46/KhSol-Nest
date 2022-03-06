import { Procedure } from './procedure.model';
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
interface GenderCreationAttrs {
   name: string;
}



@Table({ tableName: 'procedure-gender' })
export class ProcedureGender extends Model<ProcedureGender, GenderCreationAttrs> {


   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, allowNull: false })
   name: string;


   @HasMany(() => Procedure)
   procedure: Procedure[]


}