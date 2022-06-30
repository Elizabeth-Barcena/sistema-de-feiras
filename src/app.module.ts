import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroDeFeiraModule } from './cadastro-de-feira/cadastro-de-feira.module';
import { CadastroDeArremateModule } from './cadastro-de-arremate/cadastro-de-arremate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cadastroDeArremateEntity } from './cadastro-de-arremate/cadastroDeArremate.entity';
import { cadastroDeFeiraEntity } from './cadastro-de-feira/cadastroDeFeira.Entity';
import { CadastroDeFeiraController } from './cadastro-de-feira/cadastro-de-feira.controller';
import { CadastroDeArremateController } from './cadastro-de-arremate/cadastro-de-arremate.controller';
import { CadastroDeArremateService } from './cadastro-de-arremate/cadastro-de-arremate.service';
import { CadastroDeFeiraService } from './cadastro-de-feira/cadastro-de-feira.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'SistemaFeiras',
      entities: [cadastroDeArremateEntity, cadastroDeFeiraEntity],
      synchronize: true,
    }),
    CadastroDeFeiraModule,
    CadastroDeArremateModule,
  ],
  controllers: [
    AppController,
    CadastroDeFeiraController,
    CadastroDeArremateController,
  ],
  providers: [AppService, CadastroDeArremateService, CadastroDeFeiraService],
})
export class AppModule {}
