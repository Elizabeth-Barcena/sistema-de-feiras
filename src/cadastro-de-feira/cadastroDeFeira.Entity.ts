import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { cadastroDeArremateEntity } from 'src/cadastro-de-arremate/cadastroDeArremate.entity';

@Entity()
export class cadastroDeFeiraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Data: Date;

  @Column()
  Local: string;

  @Column()
  CreatedAt: Date;

  @Column()
  UpdateAt: Date;

  @JoinColumn()
  @OneToOne(() => cadastroDeArremateEntity)
  cadastroDeArremateEntity: cadastroDeArremateEntity;
}
