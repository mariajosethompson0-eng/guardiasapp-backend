import { Module } from '@nestjs/common';
import { PacienteM1Service } from './paciente-m1.service.js';
import { PacienteM1Controller } from './paciente-m1.controller.js';

@Module({
  controllers: [PacienteM1Controller],
  providers: [PacienteM1Service],
})
export class PacienteM1Module {}
