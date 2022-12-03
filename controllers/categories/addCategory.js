const { Category } = require('../../models');

const addCategory = async (req, res) => {
  const newCategory = req.body;
  const result = await Category.create(newCategory);

  res.status(201).json({
    status: 'success',
    code: 201,
    date: { result },
  });
};
module.exports = addCategory;
