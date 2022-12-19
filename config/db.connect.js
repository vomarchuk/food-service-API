const mongoose = require('mongoose');
const { DB_HOST, DB_NAME } = require('./config');

const connectDatabase = async () => {
  await mongoose.connect(DB_HOST, { dbName: DB_NAME });
};
module.exports = { connectDatabase };
