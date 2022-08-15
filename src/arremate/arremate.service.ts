import { Injectable } from '@nestjs/common';
import { CreateArremateDto } from './dto/create-arremate.dto';
import { UpdateArremateDto } from './dto/update-arremate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArremateEntity } from './entities/arremate.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ArremateService {
  constructor(
    @InjectRepository(ArremateEntity)
    private ArremateRepository: Repository<ArremateEntity>,
  ) {}
  async cadastroDeArremate(arremateRequest: CreateArremateDto) {
    console.log('valores', arremateRequest);

    const arremate = await this.ArremateRepository.save(
      this.ArremateRepository.create({
        lote: arremateRequest.lote,
        mangueira: arremateRequest.mangueira,
        produtor: arremateRequest.produtor,
        sexo: arremateRequest.sexo,
        categoria: arremateRequest.categoria,
        dataNascimento: arremateRequest.dataNascimento,
        peso: arremateRequest.peso,
        cabecas: arremateRequest.cabecas,
        localidade: arremateRequest.localidade,
        leiloeira: arremateRequest.leiloeira,
        status: arremateRequest.status,
        pesoLote: arremateRequest.pesoLote,
        comprador: arremateRequest.comprador,
        precoKg: arremateRequest.precoKg,
        feiraId: arremateRequest.feiraId,
      }),
    );
    return arremate;
  }

  async findAll() {
    const response = await this.ArremateRepository.find();
    return response;
  }
  async findOne(feiraId: number) {
    const response = await this.ArremateRepository.find({
      where: { feiraId: feiraId },
    });
    return response;
  }

  async update(feiraId: number, updateArremateDto: UpdateArremateDto) {
    const busca = await this.ArremateRepository.findOneBy({ feiraId });
    this.ArremateRepository.merge(busca,updateArremateDto);

    return await this.ArremateRepository.save(busca);
  }

  remove(id: number) {
    return this.ArremateRepository.delete({ id });
  }
}
