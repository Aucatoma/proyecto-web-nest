import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { TarjetaCreditoService } from './tarjeta-credito.service';
import { TarjetaCreditoPipe } from './tarjeta-credito.pipe';
import { TARJETA_SCHEMA } from './tarjeta-credito.schema';
import { TarjetaCredito } from './tarjeta-credito';

@Controller('tarjeta-credito')
export class TarjetaCreditoController {

  constructor(
    private readonly _tarjetaService : TarjetaCreditoService
  ){}

  @Get()
  obtenerTodos(){
    return this._tarjetaService.findAll();
  }

  @Get(':id')
  obtenerUno(@Param('id') id){
    return this._tarjetaService.findByLibroId(id);

  }

  @Post()
  @UsePipes(new TarjetaCreditoPipe(TARJETA_SCHEMA))
  insertarTarjeta(@Body() tarjeta: TarjetaCredito){
    return this._tarjetaService.insert(tarjeta);
  }

  @Put(':id')
  actualizarTarjeta( @Param('id') id, @Body(new TarjetaCreditoPipe(TARJETA_SCHEMA)) tarjeta){
    return this._tarjetaService.update(id, tarjeta);
  }

  @Delete(':id')
  eliminarTarjeta(@Param('id') id){
    return this._tarjetaService.delete(id);
  }


}
