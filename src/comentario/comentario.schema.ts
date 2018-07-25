
import * as Joi from 'joi';

export const COMENTARIO_SCHEMA = Joi.object()
  .keys({
    fecha: Joi
      .string()
      .required(),
    comentario: Joi
      .string()
      .alphanum()
      .min(1)
      .max(500)
      .required(),
    puntuacionLibro: Joi
      .number()
      .integer()
      .positive()
      .required(),
    usuario: Joi
      .number()
      .positive()
      .integer()
      .required(),
    libro: Joi
      .number()
      .positive()
      .integer()
      .required(),
  });
