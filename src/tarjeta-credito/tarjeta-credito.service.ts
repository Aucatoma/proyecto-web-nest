import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { TarjetaCreditoEntity } from './tarjeta-credito.entity';
import { TarjetaCredito } from './tarjeta-credito';

@Injectable()
export class TarjetaCreditoService {

  constructor(
    @InjectRepository(TarjetaCreditoEntity)
    private readonly _tarjetaRepository:Repository<TarjetaCreditoEntity>,
  ){}

  async findAll(): Promise<TarjetaCreditoEntity[]>{
    return await this._tarjetaRepository.find();
  }

  async findByLibroId(id: string): Promise<TarjetaCreditoEntity>{
    return await this._tarjetaRepository.findOne(id);
  }

  async insert(tarjeta: TarjetaCredito): Promise<InsertResult>{
    return await this._tarjetaRepository.insert(tarjeta);
  }

  async update(id: string, tarjeta: TarjetaCredito): Promise<UpdateResult>{
    return await this._tarjetaRepository.update(id, tarjeta);
  }

  async delete(id: string){
    return await this._tarjetaRepository.delete(id);
  }


}

