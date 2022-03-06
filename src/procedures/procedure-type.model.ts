import { Procedure } from './procedure.model';
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

interface TypeCreationAttrs {
   name: string;
}

@Table({ tableName: 'procedure-type' })
export class ProcedureType extends Model<ProcedureType, TypeCreationAttrs> {


   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, allowNull: false })
   name: string;


   @HasMany(() => Procedure)
   procedure: Procedure[]



}