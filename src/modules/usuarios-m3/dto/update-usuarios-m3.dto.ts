import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosM3Dto } from './create-usuarios-m3.dto.js';

export class UpdateUsuariosM3Dto extends PartialType(CreateUsuariosM3Dto) {}
