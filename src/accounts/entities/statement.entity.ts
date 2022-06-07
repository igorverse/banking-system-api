import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Statement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountId: string;

  @Column()
  transacted_at: Date;

  @Column()
  operation: string;

  @Column()
  value: number;

  @Column()
  balance: number;
}
