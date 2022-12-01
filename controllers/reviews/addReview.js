const { Review } = require('../../models');

const moment = require('moment');

// console.log(Review);

const addReview = async (req, res) => {
  const currentDate = moment().format('DD.MM.YYYY');
  const newReview = { date: currentDate, ...req.body };
  const result = await Review.create(newReview);

  res.status(201).json({
    status: 'success',
    code: 201,
    date: { result },
  });
};

module.exports = addReview;
