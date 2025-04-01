import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
   async transform(value: any, metadata: ArgumentMetadata) {
      if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
         return value;
      }

      const obj = plainToInstance(metadata.metatype, value);
      const errors = await validate(obj);

      if (errors.length) {
         const messages = errors.map(err => {
            return `${err.property} - ${Object.values(err.constraints || {}).join(', ')}`;
         });
         throw new BadRequestException(messages);
      }

      return value;
   }

   private toValidate(metatype: Function): boolean {
      const types: Function[] = [String, Boolean, Number, Array, Object];
      return !types.includes(metatype);
   }
}