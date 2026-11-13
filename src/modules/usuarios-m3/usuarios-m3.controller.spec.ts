import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosM3Controller } from './usuarios-m3.controller.js';
import { UsuariosM3Service } from './usuarios-m3.service.js';

describe('UsuariosM3Controller', () => {
  let controller: UsuariosM3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosM3Controller],
      providers: [UsuariosM3Service],
    }).compile();

    controller = module.get<UsuariosM3Controller>(UsuariosM3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
