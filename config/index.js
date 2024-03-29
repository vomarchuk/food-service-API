const { DB_HOST, DB_HAME, PORT, HOST } = require('./config');
const { connectDatabase } = require('./db.connect');
const { ALLOWED_DOMAINS } = require('./constants');
const { corsOptions } = require('./options');
const { multerConfigStorage, multerConfigFilter } = require('./multerConfig');

module.exports = {
  DB_HOST,
  DB_HAME,
  PORT,
  HOST,
  connectDatabase,
  ALLOWED_DOMAINS,
  corsOptions,
  multerConfigStorage,
  multerConfigFilter,
};
