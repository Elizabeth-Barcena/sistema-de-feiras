import { Module } from '@nestjs/common';
import { FeirasService } from './feiras.service';
import { FeirasController } from './feiras.controller';
import { FeiraEntity } from './entities/feira.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FeiraEntity])],
  exports: [TypeOrmModule],
  controllers: [FeirasController],
  providers: [FeirasService],
})
export class FeirasModule {}
