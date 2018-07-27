import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioPipe } from '../usuario/usuario.pipe';
import { USUARIO_SCHEMA } from '../usuario/usuario.schema';

const fs = require('fs')

@Controller('registro')
export class RegistroController {
  constructor(
    private readonly _UsuarioService: UsuarioService
  ){}

  @Post()
  registrarUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario){
    const imagenBase64 = usuario.imagen;
    const nombreArchivo = usuario.nombreImagen;
    const buffer = Buffer.from(imagenBase64, 'base64');
    fs.writeFile(`${nombreArchivo}`, buffer, (error) => {
      if(error){
      }else{
        console.log('File written');
      }
    });
  }
}
