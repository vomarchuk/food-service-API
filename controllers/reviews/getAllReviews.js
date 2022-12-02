const { Review } = require('../../models');

const getAllReviews = async (_, res) => {
  const result = await Review.find();
  res.status(200).json({
    status: 'success',
    code: 200,
    date: {
      result,
    },
  });
};

module.exports = getAllReviews;
