import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class cadastroDeArremateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Lote: number;

  @Column()
  Mangueira: string;

  @Column()
  Produtor: string;

  @Column()
  Sexo: string;

  @Column()
  Categoria: string;

  @Column()
  DataNascimento: Date;

  @Column()
  Peso: number;

  @Column()
  Cabecas: number;

  @Column()
  Localidade: string;

  @Column()
  Leiloeira: string;

  @Column()
  Status: string;

  @Column()
  PesoLote: string;

  @Column()
  Comprador: string;

  @Column()
  PrecoKg: string;
}
