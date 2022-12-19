const { Review } = require('../../models');
const { RequestError } = require('../../helpers');
const getReviewById = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findById(id);
  if (!result) {
    RequestError(404, `Review with ${id} not found`);
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = getReviewById;
