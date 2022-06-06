import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  @Get()
  accounts() {
    return 'Not implemented yet!';
  }
}
