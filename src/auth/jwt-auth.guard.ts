import { User } from './../users/users.model';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuar implements CanActivate {
   constructor(private jwtService: JwtService) {

   }
   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const req = context.switchToHttp().getRequest()
      try {
         const authHeader = req.headers.authorization;
         const bearer = authHeader.split(' ')[0]
         const token = authHeader.split(' ')[1]
         if (bearer == 'bearer' || !token) {

            throw new UnauthorizedException({ meesage: 'მომხმარებლი არ არის ავტორიზირებული ' })
         }
         const user = this.jwtService.verify(token);
         req.user = user;
         return true;
      } catch (e) {

         throw new UnauthorizedException({ meesage: 'მომხმარებლი არ არის ავტორიზირებული ' })
      }
   }
}