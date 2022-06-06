import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  accounts() {
    return this.accountsService.findAccounts();
  }

  @Get(':id/balance')
  accountBalance(@Param('id') id: string) {
    return this.accountsService.findBallance(id);
  }

  @Get(':id/statement')
  accountStatement(@Param('id') id: string) {
    return this.accountsService.findStatement(id);
  }

  @Post()
  account(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.createAccount(createAccountDto);
  }

  @Post(':id/transfer')
  transferBetweenAccounts(
    @Param('id') id: string,
    @Body() createTransferDto: CreateTransferDto,
  ) {
    return this.accountsService.makeATransfer(id, createTransferDto);
  }

  @Patch(':id/deposit')
  accountDeposit(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountsService.makeADeposit(id, updateAccountDto);
  }

  @Patch(':id/withdraw')
  accountWithdraw(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountsService.makeAWithdraw(id, updateAccountDto);
  }
}
