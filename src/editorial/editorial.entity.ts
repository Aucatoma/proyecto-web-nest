import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('EDITORIAL')
export class EditorialEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}