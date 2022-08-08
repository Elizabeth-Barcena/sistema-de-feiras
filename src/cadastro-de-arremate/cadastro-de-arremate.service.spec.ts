import { Test, TestingModule } from '@nestjs/testing';
import { CadastroDeArremateService } from './cadastro-de-arremate.service';

describe('CadastroDeArremateService', () => {
  let service: CadastroDeArremateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastroDeArremateService],
    }).compile();

    service = module.get<CadastroDeArremateService>(CadastroDeArremateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
