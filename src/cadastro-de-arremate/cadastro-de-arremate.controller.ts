import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cadastroDeArremateEntity } from './cadastroDeArremate.entity';
import cadastroDeArremateDto from './dto/cadastroDeArremate.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cadastro de arremate')
@Controller('cadastro-de-arremate')
export class CadastroDeArremateController {
  constructor(
    @InjectRepository(cadastroDeArremateEntity)
    private cadastroDeArremateRepository: Repository<cadastroDeArremateEntity>,
  ) {}

  @Post('CadastroDeArremate')
  async request(@Body() cadastroDeArremateRequest: cadastroDeArremateDto) {
    await this.cadastroDeArremateRepository.save(
      this.cadastroDeArremateRepository.create({
        Lote: cadastroDeArremateRequest.Lote,
        Mangueira: cadastroDeArremateRequest.Mangueira,
        Produtor: cadastroDeArremateRequest.Produtor,
        Sexo: cadastroDeArremateRequest.Sexo,
        Categoria: cadastroDeArremateRequest.Categoria,
        DataNascimento: cadastroDeArremateRequest.DataNascimento,
        Peso: cadastroDeArremateRequest.Peso,
        Cabecas: cadastroDeArremateRequest.Cabecas,
        Localidade: cadastroDeArremateRequest.Localidade,
        Leiloeira: cadastroDeArremateRequest.Leiloeira,
        Status: cadastroDeArremateRequest.Status,
        PesoLote: cadastroDeArremateRequest.PesoLote,
        Comprador: cadastroDeArremateRequest.Comprador,
        PrecoKg: cadastroDeArremateRequest.PrecoKg,
      }),
    );
    {
      return {
        approved: true,
      };
    }
  }
}
