import { IsNumber } from 'class-validator';

export class UpdateAccountDto {
  @IsNumber()
  readonly value: number;
}
