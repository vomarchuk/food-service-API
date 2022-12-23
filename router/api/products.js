const express = require('express');
const router = express.Router();

const { controllerWrapper, validation } = require('../../middleware');
const { productsController: productsCtrl } = require('../../controllers');
const { addProductSchema } = require('../../models/product');

router.get('/:id', controllerWrapper(productsCtrl.getProductByCategoryId));
router.get('/', controllerWrapper(productsCtrl.getAllProducts));
router.post(
  '/:id',
  validation(addProductSchema),
  controllerWrapper(productsCtrl.addProduct)
);
router.delete('/:id', productsCtrl.removeProductByCategoryId);

module.exports = router;
