import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';

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
  account(@Body() body) {
    return this.accountsService.createAccount(body);
  }

  @Post(':id/transfer')
  transferBetweenAccounts(@Param('id') id: string, @Body() body) {
    return this.accountsService.makeATransfer(id, body);
  }

  @Patch(':id/deposit')
  accountDeposit(@Param('id') id: string, @Body() body) {
    return this.accountsService.makeADeposit(id, body);
  }

  @Patch(':id/withdraw')
  accountWithdraw(@Param('id') id: string, @Body() body) {
    return this.accountsService.makeAWithdraw(id, body);
  }
}
