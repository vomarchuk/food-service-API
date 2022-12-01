const { BadRequest } = require('http-errors');

const validation = (schema) => {
  const validationMiddleware = (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        return next(new BadRequest(error.message));
      }
      next();
    } catch (error) {
      next(error);
    }
  };
  return validationMiddleware;
};
module.exports = validation;
