const { Category } = require('../../models');
const { RequestError } = require('../../helpers');
const updateCategorySoonById = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await Category.findByIdAndUpdate(id, newData, { new: true });
  if (!result) {
    RequestError(404, `Category with ${id} not found`);
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    date: { result },
  });
};
module.exports = updateCategorySoonById;
