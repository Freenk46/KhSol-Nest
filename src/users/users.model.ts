import { Basket } from './../basket/basket.model';
import { Profile } from './../profile/profile.model';
import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { BelongsToMany, Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty, } from '@nestjs/swagger';

interface UserCreationAttrs {
   email: string;
   password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

   @ApiProperty({ example: '1', description: 'უნიკალური იდენტიფიკატორი' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ApiProperty({ example: 'მომხმარებელი@gmail.com', description: 'ელექტრონული მისამართი' })
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   email: string;

   @ApiProperty({ example: '12345678', description: 'პაროლი' })
   @Column({ type: DataType.STRING, allowNull: false })
   password: string;

   @ApiProperty({ example: 'True', description: 'დაბლოკილია თუ არა' })
   @Column({ type: DataType.BOOLEAN, defaultValue: false })
   baned: boolean;

   @ApiProperty({ example: 'ბილწსიტყვაობა', description: ' ბლოკირების მიზეზი' })
   @Column({ type: DataType.STRING, allowNull: true })
   banReason: string;

   @BelongsToMany(() => Role, () => UserRoles)
   roles: Role[];

   @HasOne(() => Profile)
   profile: Profile

   @HasOne(() => Basket)
   basket: Basket[]


}

