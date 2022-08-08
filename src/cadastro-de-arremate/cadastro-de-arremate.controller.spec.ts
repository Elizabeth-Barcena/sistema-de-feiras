import { Test, TestingModule } from '@nestjs/testing';
import { CadastroDeArremateController } from './cadastro-de-arremate.controller';
import { CadastroDeArremateService } from './cadastro-de-arremate.service';

describe('CadastroDeArremateController', () => {
  let controller: CadastroDeArremateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastroDeArremateController],
      providers: [CadastroDeArremateService],
    }).compile();

    controller = module.get<CadastroDeArremateController>(CadastroDeArremateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
