import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArremateEntity } from 'src/arremate/entities/arremate.entity';

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

  @OneToMany((type) => ArremateEntity, (feira) => FeiraEntity)
  arremates: ArremateEntity[];
}
