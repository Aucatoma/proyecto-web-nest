
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
      .greaterThanOrEqual(0)
      .lessThanOrEqual(5)
      .required(),
  });
