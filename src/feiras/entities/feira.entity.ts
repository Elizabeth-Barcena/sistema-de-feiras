import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArremateEntity } from 'src/arremate/entities/arremate.Entity';

@Entity()
export class FeiraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  nome: string;

  @Column()
  local: string;

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;

  @JoinColumn()
  @OneToMany(() => ArremateEntity, (Arremate) => Arremate.feira)
  Arremate: ArremateEntity[];
}
