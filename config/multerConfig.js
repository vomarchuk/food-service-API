const multer = require('multer');
const path = require('path');
const tempDir = path.join(__dirname, '../temp');
const multerConfigStorage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const multerConfigFilter = (_, file, cb) => {
  if (file.mimetype.includes('image')) {
    cb(null, true);
    return;
  }
  cb(null, false);
};

module.exports = { multerConfigStorage, multerConfigFilter };
