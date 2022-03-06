import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty, } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
interface ProfileCreationAttrs {
   name: string;
   lastname: string;
   age: number;
   city: string;
   country: string;
   phone: number;
   userId: number;
}

@Table({ tableName: 'profile' })
export class Profile extends Model<Profile, ProfileCreationAttrs> {

   @ApiProperty({ example: '1', description: 'უნიკალური იდენტიფიკატორი' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ApiProperty({ example: 'გიორგი', description: 'სახელი' })
   @Column({ type: DataType.STRING, allowNull: true })
   name: string;

   @ApiProperty({ example: 'ბერიძე', description: 'გვარი' })
   @Column({ type: DataType.STRING, allowNull: true })
   lastname: string;

   @ApiProperty({ example: '99', description: 'ასაკი' })
   @Column({ type: DataType.INTEGER, allowNull: true })
   age: number;

   @ApiProperty({ example: 'თბილისი', description: ' ქალაქი' })
   @Column({ type: DataType.STRING, allowNull: true })
   city: string;

   @ApiProperty({ example: 'გერმანია', description: ' ქვეყანა' })
   @Column({ type: DataType.STRING, allowNull: true })
   country: string;

   @ApiProperty({ example: '55555555', description: ' ტლეფონის ნომერი' })
   @Column({ type: DataType.INTEGER, allowNull: true, unique: true })
   phone: number;

   @ForeignKey(() => User)
   @Column({ type: DataType.INTEGER, unique: true })
   userId: number;


   @BelongsTo(() => User)
   user: User;

}