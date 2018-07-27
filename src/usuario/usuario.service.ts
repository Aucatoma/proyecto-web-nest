import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ){}

  async findById(id: string): Promise<UsuarioEntity>{
    return await this._usuarioRepository.findOne(id);
  }

  async insertar(){

    //this._usuarioRepository.insert();
  }
}
