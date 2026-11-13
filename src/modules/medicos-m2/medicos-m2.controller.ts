import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicosM2Service } from './medicos-m2.service.js';
import { CreateMedicosM2Dto } from './dto/create-medicos-m2.dto.js';
import { UpdateMedicosM2Dto } from './dto/update-medicos-m2.dto.js';

@Controller('medicos-m2')
export class MedicosM2Controller {
  constructor(private readonly medicosM2Service: MedicosM2Service) {}

  @Post()
  create(@Body() createMedicosM2Dto: CreateMedicosM2Dto) {
    return this.medicosM2Service.create(createMedicosM2Dto);
  }

  @Get()
  findAll() {
    return this.medicosM2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicosM2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicosM2Dto: UpdateMedicosM2Dto) {
    return this.medicosM2Service.update(+id, updateMedicosM2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicosM2Service.remove(+id);
  }
}
