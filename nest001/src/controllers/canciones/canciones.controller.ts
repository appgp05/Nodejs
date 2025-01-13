import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('canciones')
export class CancionesController {
  @Get('')
  getListaCanciones() {
    return `Ésta es la lista de canciones`;
  }
  @Get(':id')
  getCancionId(@Param('id') cancionId: string) {
    return `Cancion ${cancionId}`;
  }
  @Get('?title')
  getCancionTittle(@Param('title') title: string) {
    return `Nombre de la cancion: ${title}`;
  }

  @Delete('/:id')
  deleteCancionId(@Param('id') cancionId: string) {
    return `Cancion ${cancionId} eliminada`;
  }
  @Put('/:id')
  putCancionId(@Param('id') cancionId: string) {
    return `Cancion ${cancionId} insertada`;
  }
  @Post('/:title/:category')
  postCancionTitleCategory(@Param() { title, category }) {
    return `Cancion ${title} con la categoria ${category}`;
  }
}
