import { IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  readonly idAccountToTranfer: string;

  @IsNumber()
  readonly value: number;
}
