import { IsPositive } from 'class-validator';

export class UpdateAccountDto {
  @IsPositive()
  readonly value: number;
}
