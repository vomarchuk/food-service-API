const { multerConfig } = require('../config');
const multer = require('multer');
const upload = multer({
  storage: multerConfig,
});
module.exports = upload;
