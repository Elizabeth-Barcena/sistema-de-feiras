import { Test, TestingModule } from '@nestjs/testing';
import { FeirasController } from './feiras.controller';
import { FeirasService } from './feiras.service';

describe('FeirasController', () => {
  let controller: FeirasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeirasController],
      providers: [FeirasService],
    }).compile();

    controller = module.get<FeirasController>(FeirasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
