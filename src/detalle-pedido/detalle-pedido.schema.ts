
import * as Joi from 'joi';

export const DETALLE_SCHEMA = Joi.object()
  .keys({
    cantidad: Joi
      .number()
      .integer()
      .positive()
      .required(),
    cabeceraId: Joi
      .number()
      .integer()
      .positive()
      .required(),
    libroId: Joi
      .number()
      .integer()
      .positive()
      .required(),
  });
