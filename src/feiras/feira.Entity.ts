import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArremateEntity } from 'src/arremate/arremate.Entity';
import { Arremate } from 'src/arremate/entities/arremate.entity';

@Entity()
export class FeiraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

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
