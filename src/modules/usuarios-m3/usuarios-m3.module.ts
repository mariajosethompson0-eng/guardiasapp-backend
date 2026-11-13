import { Module } from '@nestjs/common';
import { UsuariosM3Service } from './usuarios-m3.service.js';
import { UsuariosM3Controller } from './usuarios-m3.controller.js';

@Module({
  controllers: [UsuariosM3Controller],
  providers: [UsuariosM3Service],
})
export class UsuariosM3Module {}
