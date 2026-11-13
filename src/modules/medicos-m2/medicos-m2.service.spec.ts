import { Test, TestingModule } from '@nestjs/testing';
import { MedicosM2Service } from './medicos-m2.service.js';

describe('MedicosM2Service', () => {
  let service: MedicosM2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicosM2Service],
    }).compile();

    service = module.get<MedicosM2Service>(MedicosM2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
