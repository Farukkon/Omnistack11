const { celebrate, Segments, Joi } = require('celebrate');

const index = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

const ProfileValidator = {
  index,
};

module.exports = ProfileValidator;
