import { PipeTransform, Pipe, ArgumentMetadata, Injectable, BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class ComentarioPipe implements PipeTransform<any> {

  constructor(private readonly _comentarioSchema){}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const { error } = Joi.validate(value, this._comentarioSchema);
    if (error){
      throw new BadRequestException({error1: error});
    }
    return value;
  }
}
