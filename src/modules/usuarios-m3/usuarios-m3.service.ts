import { Injectable } from '@nestjs/common';
import { CreateUsuariosM3Dto } from './dto/create-usuarios-m3.dto.js';
import { UpdateUsuariosM3Dto } from './dto/update-usuarios-m3.dto.js';

@Injectable()
export class UsuariosM3Service {
  create(createUsuariosM3Dto: CreateUsuariosM3Dto) {
    return 'This action adds a new usuariosM3';
  }

  findAll() {
    return `This action returns all usuariosM3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosM3`;
  }

  update(id: number, updateUsuariosM3Dto: UpdateUsuariosM3Dto) {
    return `This action updates a #${id} usuariosM3`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosM3`;
  }
}
