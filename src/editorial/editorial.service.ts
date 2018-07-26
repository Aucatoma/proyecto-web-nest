import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditorialEntity } from './editorial.entity';

@Injectable()
export class EditorialService {

  constructor(
    @InjectRepository(EditorialEntity)
    private readonly _editorialRepository:Repository<EditorialEntity>,
  ){}

  async findAll(): Promise<EditorialEntity[]>{
    return await this._editorialRepository.find();
  }

  async findByEditorialId(id: string): Promise<EditorialEntity>{
    return await this._editorialRepository.findOne(id);

  }

  async findByEditorialName(nombre: string): Promise<EditorialEntity[]>{
    return await this._editorialRepository.find({nombre: nombre})
  }

}
