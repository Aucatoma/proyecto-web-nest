import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TARJETA_CREDITO')
export class TarjetaCreditoEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  numero:number;

  @Column()
  codigo:number;

  @Column()
  mes:number;

  @Column()
  anio:number;

}