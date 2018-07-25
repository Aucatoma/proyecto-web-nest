import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GENERO')

export class GeneroEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;


}