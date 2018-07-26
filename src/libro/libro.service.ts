import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LibroEntity } from './libro.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(LibroEntity)
    private readonly _libroRepository: Repository<LibroEntity>,
  ){}

  async findAll(): Promise<LibroEntity[]>{
    return await this._libroRepository.find();
  }

  async findByLibroId(id: string): Promise<LibroEntity>{
    return await this._libroRepository.findOne(id);
  }

  async findByLibroName(nombre: string): Promise<LibroEntity[]>{
    return await this._libroRepository.find({nombre:nombre});
  }


}
