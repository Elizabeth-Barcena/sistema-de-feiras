import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { CadastroDeArremateService } from './cadastro-de-arremate.service';
import cadastroDeArremateDto from './dto/cadastroDeArremate.dto';

@ApiTags('Cadastro de arremate')
@Controller('cadastro-de-arremate')
export class CadastroDeArremateController {
  constructor(private cadastroDeArremateService: CadastroDeArremateService) {}
  @Post('CadastroDeArremate')
  async request(@Body() cadastroDeArremateResquest: cadastroDeArremateDto) {
    const response = await this.cadastroDeArremateService.cadastroDeArremate(
      cadastroDeArremateResquest,
    );
    console.log(response);
    return {
      approved: true,
    };
  }
}
