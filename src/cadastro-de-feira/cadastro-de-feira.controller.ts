import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CadastroDeFeiraService } from './cadastro-de-feira.service';
import cadatroDeFeirasDto from './dto/cadastroDeFeiras.sto';
@ApiTags('Cadastro da feira')
@Controller('cadastro-de-feira')
export class CadastroDeFeiraController {
  constructor(
    private readonly cadastroDeFeiraService: CadastroDeFeiraService,
  ) {}
  @Post()
  request(@Body() cadastroDeFeirasRequest: cadatroDeFeirasDto) {
    return 'ok';
  }
}
