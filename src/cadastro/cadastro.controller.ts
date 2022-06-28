import { Controller, Get } from '@nestjs/common';

@Controller('cadastro')
export class CadastroController {
  @Get()
  getHello(): string {
    return 'Olá usuario';
  }
}
