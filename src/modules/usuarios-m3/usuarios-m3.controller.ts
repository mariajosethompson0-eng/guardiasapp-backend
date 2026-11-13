import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosM3Service } from './usuarios-m3.service.js';
import { CreateUsuariosM3Dto } from './dto/create-usuarios-m3.dto.js';
import { UpdateUsuariosM3Dto } from './dto/update-usuarios-m3.dto.js';

@Controller('usuarios-m3')
export class UsuariosM3Controller {
  constructor(private readonly usuariosM3Service: UsuariosM3Service) {}

  @Post()
  create(@Body() createUsuariosM3Dto: CreateUsuariosM3Dto) {
    return this.usuariosM3Service.create(createUsuariosM3Dto);
  }

  @Get()
  findAll() {
    return this.usuariosM3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosM3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosM3Dto: UpdateUsuariosM3Dto) {
    return this.usuariosM3Service.update(+id, updateUsuariosM3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosM3Service.remove(+id);
  }
}
