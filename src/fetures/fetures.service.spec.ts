import { Test, TestingModule } from '@nestjs/testing';
import { FeturesService } from './fetures.service';

describe('FeturesService', () => {
  let service: FeturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeturesService],
    }).compile();

    service = module.get<FeturesService>(FeturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
