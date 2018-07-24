import { Module } from '@nestjs/common';
import { UsuarioTarjetaController } from './usuario-tarjeta.controller';
import { UsuarioTarjetaService } from './usuario-tarjeta.service';

@Module({
  controllers: [UsuarioTarjetaController],
  providers: [UsuarioTarjetaService]
})
export class UsuarioTarjetaModule {}
