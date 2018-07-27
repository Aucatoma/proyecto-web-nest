import { Module } from '@nestjs/common';
import { TarjetaCreditoService } from './tarjeta-credito.service';
import { TarjetaCreditoController } from './tarjeta-credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarjetaCreditoEntity } from './tarjeta-credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TarjetaCreditoEntity])],
  providers: [TarjetaCreditoService],
  controllers: [TarjetaCreditoController]})
export class TarjetaCreditoModule {}
