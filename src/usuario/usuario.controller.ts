import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioPipe } from './usuario.pipe';
import { USUARIO_SCHEMA } from './usuario.schema';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly _usuarioService: UsuarioService){}

  @Get(':id')
  obtenerUsuario(@Param('id') id){
    return this._usuarioService.findById(id);
  }


  @Put(':id')
  actualizarUsuario(@Param('id') id, @Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario){
    const imagenBase64 = usuario.imagenUrl;
  }

}
