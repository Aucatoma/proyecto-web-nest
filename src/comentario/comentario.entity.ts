import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COMENTARIO')
export class ComentarioEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  comentario: string;

  @Column()
  puntuacionLibro: number;
}