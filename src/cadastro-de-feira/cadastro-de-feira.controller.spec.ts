import { Test, TestingModule } from '@nestjs/testing';
import { CadastroDeFeiraController } from './cadastro-de-feira.controller';
import { CadastroDeFeiraService } from './cadastro-de-feira.service';

describe('CadastroDeFeiraController', () => {
  let controller: CadastroDeFeiraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastroDeFeiraController],
      providers: [CadastroDeFeiraService],
    }).compile();

    controller = module.get<CadastroDeFeiraController>(CadastroDeFeiraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
