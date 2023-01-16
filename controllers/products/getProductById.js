const { Product } = require('../../models');

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  });
};
module.exports = getProductById;
