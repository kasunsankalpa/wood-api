import { Test, TestingModule } from '@nestjs/testing';
import { CtypeService } from './ctype.service';

describe('CtypeService', () => {
  let service: CtypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtypeService],
    }).compile();

    service = module.get<CtypeService>(CtypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
