import { Injectable } from '@nestjs/common';
import { CreateMedicosM2Dto } from './dto/create-medicos-m2.dto.js';
import { UpdateMedicosM2Dto } from './dto/update-medicos-m2.dto.js';

@Injectable()
export class MedicosM2Service {
  create(createMedicosM2Dto: CreateMedicosM2Dto) {
    return 'This action adds a new medicosM2';
  }

  findAll() {
    return `This action returns all medicosM2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicosM2`;
  }

  update(id: number, updateMedicosM2Dto: UpdateMedicosM2Dto) {
    return `This action updates a #${id} medicosM2`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicosM2`;
  }
}
