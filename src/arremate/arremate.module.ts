import { Module } from '@nestjs/common';
import { ArremateService } from './arremate.service';
import { ArremateController } from './arremate.controller';
import { ArremateEntity } from './entities/arremate.Entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeiraEntity } from 'src/feiras/entities/feira.Entity';
@Module({
  imports: [TypeOrmModule.forFeature([ArremateEntity, FeiraEntity])],
  controllers: [ArremateController],
  providers: [ArremateService],
  exports: [TypeOrmModule],
})
export class ArremateModule {}
