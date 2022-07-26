import { FeiraEntity } from 'src/feiras/entities/feira.Entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ArremateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lote: number;

  @Column()
  mangueira: string;

  @Column()
  produtor: string;

  @Column()
  sexo: string;

  @Column()
  categoria: string;

  @Column()
  dataNascimento: Date;

  @Column()
  peso: number;

  @Column()
  cabecas: number;

  @Column()
  localidade: string;

  @Column()
  leiloeira: string;

  @Column()
  status: string;

  @Column()
  pesoLote: string;

  @Column()
  comprador: string;

  @Column()
  precoKg: string;
  @ManyToOne(() => FeiraEntity)
  feira: FeiraEntity;
}
