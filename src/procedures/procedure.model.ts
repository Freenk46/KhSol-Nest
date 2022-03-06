import { ProcedureGender } from './procedure-gender.model';
import { ProcedureClass } from './procedure-class.model';
import { ProcedureType } from './procedure-type.model';
import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty, } from '@nestjs/swagger';

interface ProcedureCreationAttrs {
   name: string;
   duration: number;
   info: string;
   price: number;
   genderId: number;
   typeId: number;
   classId: number;

}

@Table({ tableName: 'procedures' })
export class Procedure extends Model<Procedure, ProcedureCreationAttrs> {

   @ApiProperty({ example: '1', description: 'უნიკალური იდენტიფიკატორი' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ApiProperty({ example: 'მთლიანი სხეულის ლაზერი', description: 'პროცედურის სახელი' })
   @Column({ type: DataType.STRING, allowNull: false })
   name: string;

   @ApiProperty({ example: '30წ', description: 'პროცედურის ხანგრძკივობა' })
   @Column({ type: DataType.INTEGER, allowNull: false })
   duration: number;

   @ApiProperty({ example: '100ლ', description: 'ფასი' })
   @Column({ type: DataType.INTEGER, allowNull: false })
   price: number;

   @ApiProperty({ example: '....', description: 'პროცედურის აღწერილობა' })
   @Column({ type: DataType.STRING, allowNull: false })
   info: string;


   @ApiProperty({ example: 'კაცი', description: 'სქესი' })
   @ForeignKey(() => ProcedureGender)
   @Column({ type: DataType.INTEGER })
   genderId: number;


   @ApiProperty({ example: 'ლაზერული ეპილაცია', description: 'პროცედურის ტიპი' })
   @ForeignKey(() => ProcedureType)
   @Column({ type: DataType.INTEGER, allowNull: false })
   typeId: number;


   @ApiProperty({ example: 'მთლიანი სხეულის ლაზერი', description: 'პროცედურის კატეგორია' })
   @ForeignKey(() => ProcedureClass)
   @Column({ type: DataType.INTEGER, allowNull: false })
   classId: number;

   @BelongsTo(() => ProcedureClass)
   class: ProcedureClass

   @BelongsTo(() => ProcedureType)
   type: ProcedureType

   @BelongsTo(() => ProcedureGender)
   gender: ProcedureGender




}

