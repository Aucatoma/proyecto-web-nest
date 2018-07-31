import { Body, Controller, Get, Param, Put, Req } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioPipe } from './usuario.pipe';
import { USUARIO_SCHEMA } from './usuario.schema';
import { JwtService } from '../json-web-token/jwt.service';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _jwtService: JwtService){}

  @Get(':id')
  obtenerUsuario(@Param('id') id){
    return this._usuarioService.findById(id);
  }

  @Put(':id')
  actualizarUsuario(@Param('id') id, @Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario){
    const imagenBase64 = usuario.imagenUrl;
  }

  @Get()
  obtenerUsuarioToken(@Req() req){
    const username = this._jwtService.leerToken(req.headers.authorization).data;
    return this._usuarioService.findByUsername(username);
  }

  @Get('comentario/:id')
  obtenerUsuarioPorComentario(@Param('id') id){
    return this._usuarioService.findByComentarioId(id);
  }

}
