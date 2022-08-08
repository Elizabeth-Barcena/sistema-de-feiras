import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cadastroDeArremateEntity } from './cadastroDeArremate.entity';
import cadastroDeArremateDto from './dto/cadastroDeArremate.dto';

@Injectable()
export class CadastroDeArremateService {
  constructor(
    @InjectRepository(cadastroDeArremateEntity)
    private cadastroDeArremateRepository: Repository<cadastroDeArremateEntity>,
  ) {}
  async cadastroDeArremate(cadastroDeArremateRequest: cadastroDeArremateDto) {
    const arremate = await this.cadastroDeArremateRepository.save(
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
    return arremate;
  }

  /*  public async buscaTodos() {
    const response = this.cadastroDeArremateRepository.find();

    const buscaUm = this.cadastroDeArremateRepository.findOne();

    const atualiza = await this.cadastroDeArremateRepository.findOne();

    atualiza.PesoLote = 100;
    const novaAtualizado = await this.cadastroDeArremateRepository.save(
      atualiza,
    );

    const deleter = await this.cadastroDeArremateRepository.delete{parametro})
  }*/
}
