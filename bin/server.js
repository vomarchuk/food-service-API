const express = require('express');
const serverLogMiddleware = require('../middleware/server.log');

const backEnd = require('./../backEnd');

const reviews = backEnd.reviews;

const app = express();

app.use(serverLogMiddleware);

app.get('/reviews', (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    data: { result: reviews },
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
