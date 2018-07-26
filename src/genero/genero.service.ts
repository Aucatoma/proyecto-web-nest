import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneroEntity } from './genero.entity';
import { Repository } from 'typeorm';


@Injectable()
export class GeneroService {

  constructor(
    @InjectRepository(GeneroEntity)
    private readonly _generoRepository:Repository<GeneroEntity>
  ){}

  async findAll(): Promise<GeneroEntity[]>{
    return await this._generoRepository.find();
  }

  async findByGeneroId(id: string): Promise<GeneroEntity>{
    return await this._generoRepository.findOne(id);

  }

  async findByGeneroName(nombre: string): Promise<GeneroEntity[]>{

    return await this._generoRepository.find({ nombre: nombre});
  }

}
