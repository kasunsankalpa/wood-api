import { Test, TestingModule } from '@nestjs/testing';
import { FeturesController } from './fetures.controller';

describe('FeturesController', () => {
  let controller: FeturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeturesController],
    }).compile();

    controller = module.get<FeturesController>(FeturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
