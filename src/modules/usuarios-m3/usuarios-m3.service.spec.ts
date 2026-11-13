import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosM3Service } from './usuarios-m3.service.js';

describe('UsuariosM3Service', () => {
  let service: UsuariosM3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosM3Service],
    }).compile();

    service = module.get<UsuariosM3Service>(UsuariosM3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
