import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroDeFeiraModule } from './cadastro-de-feira/cadastro-de-feira.module';
import { CadastroDeArremateModule } from './cadastro-de-arremate/cadastro-de-arremate.module';

@Module({
  imports: [CadastroDeFeiraModule, CadastroDeArremateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
