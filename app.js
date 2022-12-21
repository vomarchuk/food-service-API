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

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/reviews', reviewsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err, _, res, __) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
