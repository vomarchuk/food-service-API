const moment = require('moment');
const fs = require('fs/promises');

const serverLogMiddleware = async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  await fs.appendFile('server.log', `\n${method} ${url} ${date}`);
  next();
};

module.exports = serverLogMiddleware;
