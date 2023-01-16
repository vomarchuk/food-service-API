const express = require('express');
const router = express.Router();

const { controllerWrapper, validation, upload } = require('../../middleware');
const { productsController: productsCtrl } = require('../../controllers');
const { addProductSchema } = require('../../models/product');

router.get('/:id', controllerWrapper(productsCtrl.getProductsByCategoryId));
router.get('/one/:id', controllerWrapper(productsCtrl.getProductById));
router.get('/', controllerWrapper(productsCtrl.getAllProducts));
router.post(
  '/:id',
  // validation(addProductSchema),
  upload.single('productImage'),
  controllerWrapper(productsCtrl.addProduct)
);
router.delete('/:id', productsCtrl.removeProductById);

module.exports = router;
