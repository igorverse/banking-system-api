import { IsPositive, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  readonly name: string;

  @IsPositive()
  readonly balance: number;
}
