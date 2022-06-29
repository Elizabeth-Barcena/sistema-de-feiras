import { Module } from '@nestjs/common';
import { CadastroDeArremateService } from './cadastro-de-arremate.service';
import { CadastroDeArremateController } from './cadastro-de-arremate.controller';

@Module({
  controllers: [CadastroDeArremateController],
  providers: [CadastroDeArremateService]
})
export class CadastroDeArremateModule {}
