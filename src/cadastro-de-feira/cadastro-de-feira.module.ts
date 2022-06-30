import { Module } from '@nestjs/common';
import { CadastroDeFeiraService } from './cadastro-de-feira.service';
import { CadastroDeFeiraController } from './cadastro-de-feira.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cadastroDeArremateEntity } from 'src/cadastro-de-arremate/cadastroDeArremate.entity';
import { cadastroDeFeiraEntity } from './cadastroDeFeira.Entity';
import { CadastroDeArremateService } from 'src/cadastro-de-arremate/cadastro-de-arremate.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([cadastroDeArremateEntity, cadastroDeFeiraEntity]),
  ],
  exports: [TypeOrmModule],
  controllers: [CadastroDeFeiraController],
  providers: [CadastroDeFeiraService, CadastroDeArremateService],
})
export class CadastroDeFeiraModule {}
