import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArremateModule } from './arremate/arremate.module';
import { FeirasModule } from './feiras/feiras.module';
import { ArremateController } from './arremate/arremate.controller';
import { FeirasController } from './feiras/feiras.controller';
import { ArremateEntity } from './arremate/entities/arremate.Entity';
import { ArremateService } from './arremate/arremate.service';
import { FeirasService } from './feiras/feiras.service';
import { FeiraEntity } from './feiras/entities/feira.Entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'SistemaFeiras',
      entities: [ArremateEntity, FeiraEntity],
      synchronize: true,
    }),
    ArremateModule,
    FeirasModule,
  ],
  controllers: [AppController, ArremateController, FeirasController],
  providers: [AppService, ArremateService, FeirasService],
})
export class AppModule {}
