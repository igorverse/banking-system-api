import { IsPositive, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  readonly idAccountToTransfer: string;

  @IsPositive()
  readonly value: number;
}
