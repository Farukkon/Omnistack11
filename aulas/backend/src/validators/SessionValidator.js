const { celebrate, Segments, Joi } = require('celebrate');

const login = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

const SessionValidator = {
  login,
};

module.exports = SessionValidator;
