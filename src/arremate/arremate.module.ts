import { Module } from '@nestjs/common';
import { ArremateService } from './arremate.service';
import { ArremateController } from './arremate.controller';
import { ArremateEntity } from './entities/arremate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeiraEntity } from 'src/feiras/entities/feira.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ArremateEntity, FeiraEntity])],
  controllers: [ArremateController],
  providers: [ArremateService],
  exports: [TypeOrmModule],
})
export class ArremateModule {}
