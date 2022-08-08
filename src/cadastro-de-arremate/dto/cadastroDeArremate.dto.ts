import { ApiProperty } from '@nestjs/swagger';
class cadastroDeArremateDto {
  @ApiProperty()
  Lote: number;

  @ApiProperty()
  Mangueira: string;

  @ApiProperty()
  Produtor: string;

  @ApiProperty()
  Sexo: string;

  @ApiProperty()
  Categoria: string;

  @ApiProperty()
  DataNascimento: Date;

  @ApiProperty()
  Peso: number;

  @ApiProperty()
  Cabecas: number;

  @ApiProperty()
  Localidade: string;

  @ApiProperty()
  Leiloeira: string;

  @ApiProperty()
  Status: string;

  @ApiProperty()
  PesoLote: string;

  @ApiProperty()
  Comprador: string;

  @ApiProperty()
  PrecoKg: string;
}
export default cadastroDeArremateDto;
