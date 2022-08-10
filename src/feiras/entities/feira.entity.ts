import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FeiraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  data: Date;

  @Column()
  nome: string;

  @Column()
  local: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updateAt: Date;
}
