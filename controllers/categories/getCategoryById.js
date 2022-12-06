const { Category } = require('../../models');

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await Category.findById(id);
  res.status(200).json({
    status: 'success',
    code: 200,
    date: { result },
  });
};

module.exports = getCategoryById;
