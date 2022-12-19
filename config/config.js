const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_NAME, PORT, NODE_ENV } = process.env;

module.exports = {
  PORT,
  DB_HOST,
  DB_NAME,
  NODE_ENV,
};
