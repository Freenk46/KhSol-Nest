import {
   CanActivate,
   ExecutionContext,
   Injectable,
   ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
   constructor(private reflector: Reflector) { }

   canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
         context.getHandler(),
         context.getClass(),
      ]);

      if (!requiredRoles) return true;

      const request = context.switchToHttp().getRequest();
      const user = request.user;

      if (!user?.roles || !user.roles.some((role: string) => requiredRoles.includes(role))) {
         throw new ForbiddenException('თქვენ არ გაქვთ წვდომის უფლება');
      }

      return true;
   }
}