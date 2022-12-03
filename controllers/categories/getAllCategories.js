const { Category } = require('../../models');

const getAllCategories = async (_, res) => {
  const result = await Category.find({}, '-createdAt -updatedAt');
  res.status(200).json({
    status: 'success',
    code: 200,
    date: { result },
  });
};

module.exports = getAllCategories;
