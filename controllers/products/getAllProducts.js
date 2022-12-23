const { Product } = require('../../models');

const getAllProducts = async (_, res) => {
  const result = await Product.find();
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = getAllProducts;
