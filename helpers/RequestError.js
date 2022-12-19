const { NotFound, BadRequest } = require('http-errors');

const RequestError = (status, message) => {
  if (status === 404) throw new NotFound(message);
  throw new BadRequest(message);
};

module.exports = RequestError;

//test////////////////////////////////
