
import { User } from './../users/users.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty, } from '@nestjs/swagger';
interface TokenCreationAttrs {
   userId: number;
   refreshToken: string;
}

@Table({ tableName: 'token' })
export class Token extends Model<Token, TokenCreationAttrs> {

   @ApiProperty({ example: '...', description: 'refreshToken' })
   @Column({ type: DataType.STRING, unique: true })
   refreshToken: string;

   @ForeignKey(() => User)
   @Column({ type: DataType.INTEGER, unique: true })
   userId: number;


   @BelongsTo(() => User)
   user: User;
}