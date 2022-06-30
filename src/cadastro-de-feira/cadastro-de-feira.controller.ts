import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import cadastroDeFeirasDto from './dto/cadastroDeFeiras.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { cadastroDeFeiraEntity } from './cadastroDeFeira.Entity';

@ApiTags('Cadastro da feira')
@Controller('cadastro-de-feira')
export class CadastroDeFeiraController {
  constructor(
    @InjectRepository(cadastroDeFeiraEntity)
    private cadastroDeFeirasRepository: Repository<cadastroDeFeiraEntity>,
  ) {}

  @Post()
  async request(@Body() cadastroDeFeirasRequest: cadastroDeFeirasDto) {
    await this.cadastroDeFeirasRepository.save(
      this.cadastroDeFeirasRepository.create({
        Data: cadastroDeFeirasRequest.Data,
        Local: cadastroDeFeirasRequest.Local,
        CreatedAt: cadastroDeFeirasRequest.createdAt,
        UpdateAt: cadastroDeFeirasRequest.updatedAt,
      }),
    );
    console.log(await this.cadastroDeFeirasRepository.find());
    return 'ok';
  }
}
