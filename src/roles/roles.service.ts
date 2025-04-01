import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './roles.schema';

@Injectable()
export class RolesService {
   constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) { }

   async createRole(value: string, description?: string): Promise<Role> {
      const existing = await this.roleModel.findOne({ value });
      if (existing) {
         throw new HttpException('როლი უკვე არსებობს', HttpStatus.BAD_REQUEST);
      }

      const newRole = new this.roleModel({ value, description });
      return newRole.save();
   }

   async getRoleByValue(value: string): Promise<Role | null> {
      return this.roleModel.findOne({ value });
   }

   async getAllRoles(): Promise<Role[]> {
      return this.roleModel.find();
   }
}
