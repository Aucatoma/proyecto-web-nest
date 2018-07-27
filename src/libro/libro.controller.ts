import { Controller, Get, Param } from '@nestjs/common';
import { LibroService } from './libro.service';



@Controller('libro')
export class LibroController {
  constructor(
    private readonly _libroService:LibroService
  ){}

  @Get()
  obtenerTodos(){
    return this._libroService.findAll();
  }

  @Get(':id')
  obtenerUnoPorId(@Param('id') id){
    return this._libroService.findByLibroId(id);

  }

  @Get('/nombre/:nombre')
  obtenerUnoPorNombre(@Param('nombre') nombre){
    return this._libroService.findByLibroName(nombre);

  }


}
