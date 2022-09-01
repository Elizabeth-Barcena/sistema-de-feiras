import { Module } from '@nestjs/common';
import { FeirasService } from './feiras.service';
import { FeirasController } from './feiras.controller';
import { FeiraEntity } from './entities/feira.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ArremateModule} from '../arremate/arremate.module'

@Module({
  imports: [TypeOrmModule.forFeature([FeiraEntity]), ArremateModule],
  controllers: [FeirasController],
  providers: [FeirasService],
  exports: [TypeOrmModule]
})
export class FeirasModule {}
