import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicosM2Dto } from './create-medicos-m2.dto.js';

export class UpdateMedicosM2Dto extends PartialType(CreateMedicosM2Dto) {}
