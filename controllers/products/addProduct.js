const { Product } = require('../../models');
const { HOST } = require('../../config');
const path = require('path');
const fs = require('fs/promises');

const productsDir = path.join(__dirname, '../../public', 'productsImage');
console.log(productsDir);
const addProduct = async (req, res) => {
  const { path: tempUpload, filename } = req.file;
  const resultUpload = path.join(productsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const productImage = path.join('productsImage', filename);
  const { id } = req.params;
  const newProduct = {
    ...req.body,
    category: id,
    productImage: `${HOST}/${productImage}`,
  };
  console.log(newProduct);
  const result = await Product.create(newProduct);
  // const result = {
  // ...req.body,
  // };
  res.status(201).json(result);
  // res.status(201).json({
  //   status: 'success',
  //   code: 201,
  //   data: { result },
  // });
};
module.exports = addProduct;
