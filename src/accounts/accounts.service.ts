import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  findAccounts() {
    return this.accountRepository.find();
  }

  async findAccount(id: string) {
    const account = await this.accountRepository.findOne({ where: { id } });

    if (!account) {
      throw new NotFoundException(`Account #${id} not found!`);
    }

    return account;
  }

  async findBallance(id: string) {
    const account = await this.findAccount(id);

    const accountBalance = {
      name: account.name,
      balance: account.balance,
    };

    return accountBalance;
  }

  findStatement(id: string) {
    return 'Not implemented yet!';
  }

  createAccount(createAccountDto: CreateAccountDto) {
    const account = this.accountRepository.create(createAccountDto);

    return this.accountRepository.save(account);
  }

  async makeATransfer(id: string, createTransferDto: CreateTransferDto) {
    const transferAccount = await this.findAccount(id);

    const { idAccountToTransfer, value } = createTransferDto;

    if (id === idAccountToTransfer) {
      throw new BadRequestException("You can't transfer to your own account!");
    }

    if (value >= transferAccount.balance) {
      throw new BadRequestException(
        'You balance need to be greater or equal than the value of transfer',
      );
    }

    const transferedAccount = await this.findAccount(idAccountToTransfer);

    const newTransferAccountBalance = transferAccount.balance - value;
    const newTransferedAccountBalance = transferedAccount.balance + value;

    const transferAccountWithNewBalance = await this.accountRepository.preload({
      id,
      balance: newTransferAccountBalance,
    });

    const transferedAccountWithNewBalance =
      await this.accountRepository.preload({
        id: idAccountToTransfer,
        balance: newTransferedAccountBalance,
      });

    if (!transferedAccount || !transferAccount) {
      throw new NotFoundException(
        'Some or both account were not found! Invalid ID!',
      );
    }

    await this.accountRepository.save(transferAccountWithNewBalance);
    await this.accountRepository.save(transferedAccountWithNewBalance);

    return `Account #${id} tranfered $${value} to account #${idAccountToTransfer}`;
  }

  async makeADeposit(id: string, updateAccountDto: UpdateAccountDto) {
    const account = await this.findAccount(id);
    const { value } = updateAccountDto;

    const newBalance = account.balance + value;

    const accountWithNewBalance = await this.accountRepository.preload({
      id,
      balance: newBalance,
    });

    if (!account) {
      throw new NotFoundException(`Account #${id} not found!`);
    }

    return this.accountRepository.save(accountWithNewBalance);
  }

  async makeAWithdraw(id: string, updateAccountDto: UpdateAccountDto) {
    const account = await this.findAccount(id);
    const { value } = updateAccountDto;

    if (value > account.balance) {
      throw new BadRequestException(
        "You don't have enough balance to request this withdraw! Check your balance!",
      );
    }

    const newBalance = account.balance - value;

    const accountWithNewBalance = await this.accountRepository.preload({
      id,
      balance: newBalance,
    });

    if (!account) {
      throw new NotFoundException(`Account #${id} not found!`);
    }

    return this.accountRepository.save(accountWithNewBalance);
  }
}
