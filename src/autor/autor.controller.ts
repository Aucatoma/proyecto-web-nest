import { Controller, Get, Param, Post } from '@nestjs/common';
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
  obtenerUno(@Param('id') id){
    return this._autorService.findById(id);
  }

  @Post()
  insertarUno(){

  }

}
