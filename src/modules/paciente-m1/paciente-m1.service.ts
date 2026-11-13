import { Injectable } from '@nestjs/common';
import { CreatePacienteM1Dto } from './dto/create-paciente-m1.dto.js';
import { UpdatePacienteM1Dto } from './dto/update-paciente-m1.dto.js';

@Injectable()
export class PacienteM1Service {
  create(createPacienteM1Dto: CreatePacienteM1Dto) {
    return 'This action adds a new pacienteM1';
  }

  findAll() {
    return `This action returns all pacienteM1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pacienteM1`;
  }

  update(id: number, updatePacienteM1Dto: UpdatePacienteM1Dto) {
    return `This action updates a #${id} pacienteM1`;
  }

  remove(id: number) {
    return `This action removes a #${id} pacienteM1`;
  }
}
