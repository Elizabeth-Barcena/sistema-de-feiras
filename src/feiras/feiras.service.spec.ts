import { Test, TestingModule } from '@nestjs/testing';
import { FeirasService } from './feiras.service';

describe('FeirasService', () => {
  let service: FeirasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeirasService],
    }).compile();

    service = module.get<FeirasService>(FeirasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
