import { Injectable } from '@nestjs/common';
import { CreateFeiraDto } from './dto/create-feira.dto';
import { UpdateFeiraDto } from './dto/update-feira.dto';
import { FeiraEntity } from './feira.Entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class FeirasService {
  constructor(
    @InjectRepository(FeiraEntity)
    private feiraRepository: Repository<FeiraEntity>,
  ) {}
  async cadastroDeArremate(feiraRequest: CreateFeiraDto) {
    const response = await this.feiraRepository.save(
      this.feiraRepository.create({
        data: feiraRequest.data,
        local: feiraRequest.local,
        createdAt: feiraRequest.createdAt,
        updateAt: feiraRequest.updatedAt,
      }),
    );
    return response;
  }

  async findAll() {
    const response = await this.feiraRepository.find();
    return response;
  }

  async findOne(id: number) {
    const response = await this.feiraRepository.findOneBy({ id });
    return response;
  }

  async update(id: number, updateFeiraDto: UpdateFeiraDto) {
    const response = await this.feiraRepository.findOneBy({ id });
    this.feiraRepository.merge(response, updateFeiraDto);
    return await this.feiraRepository.save(response);
  }
  return;

  remove(id: number) {
    return this.feiraRepository.delete({ id });
  }
}
