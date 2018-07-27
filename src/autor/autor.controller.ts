import { Controller, Get, Param } from '@nestjs/common';
import { AutorService } from './autor.service';


@Controller('autor')
export class AutorController {

  constructor(
    private readonly _autorService: AutorService,
  ){}

  @Get()
  obtenerTodos(){
    return this._autorService.findAll();
  }

  @Get(':id')
  obtenerUnoPorId(@Param('id') id){
    return this._autorService.findById(id);
  }

  @Get('nombre/:nombre')
  obtenerUnoPorNombre(@Param('nombre') nombre){
    return this._autorService.findByNombre(nombre);
  }










}
