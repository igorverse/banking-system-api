import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './entities/account.entity';
import { Statement } from './entities/statement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, Statement])],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
