import { Module } from '@nestjs/common';
import { MedicosM2Service } from './medicos-m2.service.js';
import { MedicosM2Controller } from './medicos-m2.controller.js';

@Module({
  controllers: [MedicosM2Controller],
  providers: [MedicosM2Service],
})
export class MedicosM2Module {}
