import { Test, TestingModule } from '@nestjs/testing';
import { PacienteM1Controller } from './paciente-m1.controller.js';
import { PacienteM1Service } from './paciente-m1.service.js';

describe('PacienteM1Controller', () => {
  let controller: PacienteM1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacienteM1Controller],
      providers: [PacienteM1Service],
    }).compile();

    controller = module.get<PacienteM1Controller>(PacienteM1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
