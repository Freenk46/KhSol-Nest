import { IsMongoId } from 'class-validator';

export class AddItemDto {
    @IsMongoId()
    itemId!: string;
}
