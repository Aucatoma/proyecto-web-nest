import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CABECERA_PEDIDO')
export class CabeceraPedidoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column()
  fecha: string;

  @Column()
  iva: number;
}