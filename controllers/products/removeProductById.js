const { Product } = require('../../models');

const { RequestError } = require('../../helpers');

const removeProductById = async (req, res) => {
  const { id } = req.params;

  const result = await Product.findById(id);
  if (!result) {
    RequestError(404, `Product with id ${id} not found`);
  }
  res.json(result);
};

module.exports = removeProductById;
