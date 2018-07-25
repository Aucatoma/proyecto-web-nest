import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('USUARIO')
export class UsuarioEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  username:string;

  @Column()
  contrasenia:string;

  @Column()
  nombre:string;

  @Column()
  apellido:string;

  @Column()
  correo:string;

  @Column()
  imagenUrl:string;



}