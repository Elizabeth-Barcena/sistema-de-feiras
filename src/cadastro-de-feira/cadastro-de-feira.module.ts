import { Module } from '@nestjs/common';
import { CadastroDeFeiraService } from './cadastro-de-feira.service';
import { CadastroDeFeiraController } from './cadastro-de-feira.controller';

@Module({
  controllers: [CadastroDeFeiraController],
  providers: [CadastroDeFeiraService]
})
export class CadastroDeFeiraModule {}
