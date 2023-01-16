const { DB_HOST, DB_HAME, PORT } = require('./config');
const { connectDatabase } = require('./db.connect');
const { ALLOWED_DOMAINS } = require('./constants');
const { corsOptions } = require('./options');
const multerConfig = require('./multerConfig');

module.exports = {
  DB_HOST,
  DB_HAME,
  PORT,
  connectDatabase,
  ALLOWED_DOMAINS,
  corsOptions,
  multerConfig,
};
