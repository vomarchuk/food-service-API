const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const reviewsRouter = require('./router/api/reviews');

const app = express();
const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use('/api/reviews', reviewsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
