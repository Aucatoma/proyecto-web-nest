import * as Joi from 'joi';

export const CABECERA_SCHEMA = Joi.object()
  .keys({
    fecha: Joi
      .string()
      .required(),
    numero: Joi
      .number()
      .positive()
      .required(),
    iva: Joi
      .number()
      .positive()
      .min(1)
      .max(20)
      .required(),
  });