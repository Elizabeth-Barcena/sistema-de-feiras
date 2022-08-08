import { Module } from '@nestjs/common';
import { CadastroDeArremateService } from './cadastro-de-arremate.service';
import { CadastroDeArremateController } from './cadastro-de-arremate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cadastroDeArremateEntity } from './cadastroDeArremate.entity';
import { cadastroDeFeiraEntity } from 'src/cadastro-de-feira/cadastroDeFeira.Entity';
import { CadastroDeFeiraService } from 'src/cadastro-de-feira/cadastro-de-feira.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([cadastroDeArremateEntity, cadastroDeFeiraEntity]),
  ],
  controllers: [CadastroDeArremateController],
  providers: [CadastroDeArremateService, CadastroDeFeiraService],
  exports: [TypeOrmModule],
})
export class CadastroDeArremateModule {}
