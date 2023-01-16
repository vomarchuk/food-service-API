const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { corsOptions } = require('./config');
const reviewsRouter = require('./router/api/reviews');
const categoriesRouter = require('./router/api/categories');
const productsRouter = require('./router/api/products');
const app = express();
const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatLogger));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/reviews', reviewsRouter);

const { upload } = require('./middleware');

const path = require('path');
const fs = require('fs/promises');
const productsDir = path.join(__dirname, '../../public', 'productsImage');

app.post('/api/img', upload.single('image'), async (req, res) => {
  try {
    const { path: tempUpload, filename } = req.file;
    const resultUpload = path.join(productsDir, filename);
    await fs.rename(tempUpload, resultUpload);

    const productImage = path.join('productsImage', filename);

    const newProduct = {
      ...req.body,
      productImage,
    };

    // res.status(201).json(newProduct);
  } catch (error) {
    await fs.unlink(req.file.path);
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err, _, res, __) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
