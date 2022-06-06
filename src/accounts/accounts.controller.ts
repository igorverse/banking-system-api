import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  @Get()
  accounts() {
    return 'Not implemented yet!';
  }

  @Get(':id/balance')
  accountBalance(@Param('id') id: string) {
    return 'Not implemented yet!';
  }

  @Get(':id/statement')
  accountStatement(@Param('id') id: string) {
    return 'Not implemented yet!';
  }

  @Post()
  account(@Body() body) {
    return 'Not implemented yet!';
  }

  @Post(':id/transfer')
  transferBetweenAccounts(@Param('id') id: string, @Body() body) {
    return 'Not implemented yet!';
  }

  @Patch(':id/deposit')
  accountDeposit(@Param('id') id: string, @Body() body) {
    return 'Not implemented yet!';
  }

  @Patch(':id/withdraw')
  accountWithdraw(@Param('id') id: string, @Body() body) {
    return 'Not implemented yet!';
  }
}
