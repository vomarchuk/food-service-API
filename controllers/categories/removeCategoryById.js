const { Category } = require('../../models');

const { RequestError } = require('../../helpers');
const removeCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await Category.findByIdAndRemove(id);
  if (!result) {
    RequestError(404, `Category with ${id} not found`);
  }
  res.json(result);
};

module.exports = removeCategoryById;
