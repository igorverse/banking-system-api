import { Account } from 'src/accounts/entities/account.entity';
import { Statement } from 'src/accounts/entities/statement.entity';
import { AccountRefactor1654624161712 } from 'src/migrations/1654624161712-AccountRefactor';

import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpass',
  database: 'postgres',
  entities: [Account, Statement],
  migrations: [AccountRefactor1654624161712],
});
