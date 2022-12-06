const { Category } = require('../../models');
const { RequestError } = require('../../helpers');
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await Category.findById(id);
  if (!result) {
    RequestError(404, `Category with ${id} not found`);
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    date: { result },
  });
};

module.exports = getCategoryById;
