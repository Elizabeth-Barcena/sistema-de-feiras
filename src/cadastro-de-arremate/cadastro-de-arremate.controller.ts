import { Controller } from '@nestjs/common';
import { CadastroDeArremateService } from './cadastro-de-arremate.service';

@Controller('cadastro-de-arremate')
export class CadastroDeArremateController {
  constructor(private readonly cadastroDeArremateService: CadastroDeArremateService) {}
}
