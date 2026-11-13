import { Test, TestingModule } from '@nestjs/testing';
import { PacienteM1Service } from './paciente-m1.service.js';

describe('PacienteM1Service', () => {
  let service: PacienteM1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacienteM1Service],
    }).compile();

    service = module.get<PacienteM1Service>(PacienteM1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
