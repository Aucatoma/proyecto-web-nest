import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AUTOR')
export class AutorEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

}