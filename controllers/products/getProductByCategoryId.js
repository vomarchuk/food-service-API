const { Product } = require('../../models');
const getProductByCategoryId = async (req, res) => {
  const { id } = req.params;
  const result = await Product.find({ category: id });
  console.log(result);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = getProductByCategoryId;
