import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteM1Dto } from './create-paciente-m1.dto.js';

export class UpdatePacienteM1Dto extends PartialType(CreatePacienteM1Dto) {}
