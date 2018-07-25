import { HttpException, HttpStatus } from '@nestjs/common';

export class NoEncontradoException extends HttpException {
  constructor(private readonly _mensaje) {
    super({
        mensaje: 'Petición errónea',
        status: HttpStatus.NOT_FOUND,
        detalle: _mensaje,
      },
      HttpStatus.NOT_FOUND);
  }
}
