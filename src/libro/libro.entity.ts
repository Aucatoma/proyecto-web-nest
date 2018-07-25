import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('LIBRO')
export class LibroEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  anio: number;

  @Column()
  numeroPaginas: number;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  imagenUrl: string;







}