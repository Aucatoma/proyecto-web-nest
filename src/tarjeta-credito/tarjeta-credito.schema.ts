
import * as Joi from 'joi';

export const TARJETA_SCHEMA = Joi.object()
  .keys({
    numero: Joi
      .string()
      .creditCard()
      .required(),
    codigo: Joi
      .number()
      .integer()
      .length(3)
      .required(),
    mes: Joi
      .number()
      .integer()
      .length(2)
      .greaterThan(0)
      .lessThan(13)
      .required(),
    anio: Joi
      .number()
      .integer()
      .length(2)
      .required(),
  });
