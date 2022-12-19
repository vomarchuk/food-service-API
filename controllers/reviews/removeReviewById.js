const { Review } = require('../../models');
const { RequestError } = require('../../models');

const removeReviewById = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findByIdAndRemove(id);
  if (!result) {
    RequestError(404, `Review with id ${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = removeReviewById;
