const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_NAME, PORT } = process.env;

module.exports = {
  DB_HOST,
  DB_NAME,
  PORT,
};
