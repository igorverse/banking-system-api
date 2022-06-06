import { Injectable, NotFoundException } from '@nestjs/common';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  private accounts: Account[] = [
    {
      id: '31a06b16-e09c-11ec-9d64-0242ac120002',
      name: 'Satoshi Nakamoto',
      balance: 420000000000,
    },
  ];

  findAccounts() {
    return this.accounts;
  }

  findAccount(id: string) {
    const account = this.accounts.find((account) => account.id === id);

    if (!account) {
      throw new NotFoundException(`Account #${id} not found!`);
    }

    return account;
  }

  findBallance(id: string) {
    const { balance } = this.findAccount(id);

    return balance;
  }

  findStatement(id: string) {
    return 'Not implemented yet!';
  }

  createAccount(createAccountDto: any) {
    this.accounts.push(createAccountDto);
  }

  makeATransfer(id: string, createTransferDto: any) {
    return 'Not implemented yet!';
  }

  makeADeposit(id: string, updateAccountDto: any) {
    const account = this.findAccount(id);

    if (account) {
      return 'Not implemented yet!';
    }
  }

  makeAWithdraw(id: string, updateAccountDto: any) {
    const account = this.findAccount(id);

    if (account) {
      return 'Not implemented yet!';
    }
  }
}
