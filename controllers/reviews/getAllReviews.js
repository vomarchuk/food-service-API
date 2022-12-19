const { Review } = require('../../models');

const getAllReviews = async (_, res) => {
  const result = await Review.find({}, '-createdAt -updatedAt');
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAllReviews;
