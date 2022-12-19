const { ALLOWED_DOMAINS } = require('./constants');

const corsOptions = {
  origin: ALLOWED_DOMAINS,
  credentials: true,
};

module.exports = { corsOptions };
