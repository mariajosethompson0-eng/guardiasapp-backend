import { Test, TestingModule } from '@nestjs/testing';
import { MedicosM2Controller } from './medicos-m2.controller.js';
import { MedicosM2Service } from './medicos-m2.service.js';

describe('MedicosM2Controller', () => {
  let controller: MedicosM2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicosM2Controller],
      providers: [MedicosM2Service],
    }).compile();

    controller = module.get<MedicosM2Controller>(MedicosM2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
