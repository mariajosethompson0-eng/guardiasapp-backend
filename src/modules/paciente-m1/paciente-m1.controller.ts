import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacienteM1Service } from './paciente-m1.service.js';
import { CreatePacienteM1Dto } from './dto/create-paciente-m1.dto.js';
import { UpdatePacienteM1Dto } from './dto/update-paciente-m1.dto.js';

@Controller('paciente-m1')
export class PacienteM1Controller {
  constructor(private readonly pacienteM1Service: PacienteM1Service) {}

  @Post()
  create(@Body() createPacienteM1Dto: CreatePacienteM1Dto) {
    return this.pacienteM1Service.create(createPacienteM1Dto);
  }

  @Get()
  findAll() {
    return this.pacienteM1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacienteM1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacienteM1Dto: UpdatePacienteM1Dto) {
    return this.pacienteM1Service.update(+id, updatePacienteM1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacienteM1Service.remove(+id);
  }
}
