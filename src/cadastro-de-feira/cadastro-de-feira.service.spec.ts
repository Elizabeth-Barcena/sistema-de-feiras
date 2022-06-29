import { Test, TestingModule } from '@nestjs/testing';
import { CadastroDeFeiraService } from './cadastro-de-feira.service';

describe('CadastroDeFeiraService', () => {
  let service: CadastroDeFeiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastroDeFeiraService],
    }).compile();

    service = module.get<CadastroDeFeiraService>(CadastroDeFeiraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
