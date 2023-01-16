const { Product } = require('../../models');
const { HOST } = require('../../config');
const path = require('path');
const fs = require('fs/promises');

const productsDir = path.join(__dirname, '../../public', 'productsImage');
console.log(productsDir);
const addProduct = async (req, res) => {
  const { id } = req.params;
  if (req.file) {
    const { path: tempUpload, filename } = req.file;
    const resultUpload = path.join(productsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const productImage = path.join('productsImage', filename);
    const newProduct = {
      ...req.body,
      category: id,
      productImage: `${HOST}/${productImage}`,
    };
  }
  const newProduct = {
    ...req.body,
    category: id,
  };
  const result = await Product.create(newProduct);

  res.status(201).json(result);
};
module.exports = addProduct;
