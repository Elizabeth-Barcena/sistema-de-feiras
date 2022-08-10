import { ApiProperty } from '@nestjs/swagger';

export class CreateArremateDto {
  @ApiProperty()
  lote: number;

  @ApiProperty()
  mangueira: string;

  @ApiProperty()
  produtor: string;

  @ApiProperty()
  sexo: string;

  @ApiProperty()
  categoria: string;

  @ApiProperty()
  dataNascimento: Date;

  @ApiProperty()
  peso: number;

  @ApiProperty()
  cabecas: number;

  @ApiProperty()
  localidade: string;

  @ApiProperty()
  leiloeira: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  pesoLote: string;

  @ApiProperty()
  comprador: string;

  @ApiProperty()
  precoKg: string;

  @ApiProperty()
  feiraId: number;
}
export default CreateArremateDto;
