import { Test, TestingModule } from '@nestjs/testing';
import { CtypeController } from './ctype.controller';

describe('CtypeController', () => {
  let controller: CtypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtypeController],
    }).compile();

    controller = module.get<CtypeController>(CtypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
