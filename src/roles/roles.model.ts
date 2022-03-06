import { UserRoles } from './user-roles.model';
import { User } from './../users/users.model';
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty, } from '@nestjs/swagger';
interface RoleCreationAttrs {
   value: string;
   description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {

   @ApiProperty({ example: '1', description: 'უნიკალური იდენტიფიკატორი' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ApiProperty({ example: 'ADMIN', description: 'როლის უნიკალური მნიშვნელობა' })
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   value: string;

   @ApiProperty({ example: 'ადმინისტრატორი', description: 'როლის ახწერა' })
   @Column({ type: DataType.STRING, allowNull: false })
   description: string;

   @BelongsToMany(() => User, () => UserRoles)
   users: User[];
}