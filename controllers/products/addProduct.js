const { Product } = require('../../models');

const addProduct = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const newProduct = { ...req.body, category: id };
  const result = await Product.create(newProduct);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  });
};
module.exports = addProduct;
