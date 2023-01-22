const { multerConfigStorage, multerConfigFilter } = require('../config');
const multer = require('multer');
const upload = multer({
  storage: multerConfigStorage,
  fileFilter: multerConfigFilter,
});
module.exports = upload;
