import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DETALLE_PEDIDO')
export class DetallePedidoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;


}