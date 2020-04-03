const { celebrate, Segments, Joi } = require('celebrate');

const index = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
});

const create = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.string().required(),
  }),
});

const destroy = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.required(),
  }).unknown(),
});

const IncidentValidator = {
  index,
  create,
  destroy,
};

module.exports = IncidentValidator;
