import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USUARIO_TARJETA')
export class UsuarioTarjetaEntity {

  @PrimaryGeneratedColumn()
  id:number;



}