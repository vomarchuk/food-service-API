const express = require('express');
const router = express.Router();

const { controllerWrapper, validation } = require('../../middleware');
const { categoriesController: categoriesCtrl } = require('../../controllers');
const { addCategoriesSchema } = require('../../models/category');

router.get('/', controllerWrapper(categoriesCtrl.getAllCategories));
router.post(
  '/',
  validation(addCategoriesSchema),
  controllerWrapper(categoriesCtrl.addCategory)
);

module.exports = router;
