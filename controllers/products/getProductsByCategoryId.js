const { Product } = require('../../models');
const getProductsByCategoryId = async (req, res) => {
  const { id } = req.params;
  const result = await Product.find({ category: id });
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = getProductsByCategoryId;
