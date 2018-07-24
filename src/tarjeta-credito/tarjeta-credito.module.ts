import { Module } from '@nestjs/common';
import { TarjetaCreditoService } from './tarjeta-credito.service';
import { TarjetaCreditoController } from './tarjeta-credito.controller';

@Module({
  providers: [TarjetaCreditoService],
  controllers: [TarjetaCreditoController]})
export class TarjetaCreditoModule {}
