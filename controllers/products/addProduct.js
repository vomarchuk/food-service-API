const { Product } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const productsDir = path.join(__dirname, '../../public', 'productsImage');

const addProduct = async (req, res) => {
  const { id } = req.params;
  const defaultImageUrl = path.join('productsImage', 'default-image.png');
  let productImageUrl;
  if (req.file) {
    const { path: tempUpload, filename } = req.file;
    const resultUpload = path.join(productsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    productImageUrl = path.join('productsImage', filename);
  } else {
    productImageUrl = defaultImageUrl;
  }
  const newProduct = {
    ...req.body,
    category: id,
    productImageUrl,
  };
  const result = await Product.create(newProduct);
  res.status(201).json(result);
};
module.exports = addProduct;
