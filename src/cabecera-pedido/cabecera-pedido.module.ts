import { Module } from '@nestjs/common';
import { CabeceraPedidoController } from './cabecera-pedido.controller';
import { CabeceraPedidoService } from './cabecera-pedido.service';

@Module({
  controllers: [CabeceraPedidoController],
  providers: [CabeceraPedidoService]
})
export class CabeceraPedidoModule {}
