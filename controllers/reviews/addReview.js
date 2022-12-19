const moment = require('moment');
const { Review } = require('../../models');

const addReview = async (req, res) => {
  const currentDate = moment().format('DD.MM.YYYY');
  const newReview = { date: currentDate, ...req.body };
  const result = await Review.create(newReview);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  });
};

module.exports = addReview;
