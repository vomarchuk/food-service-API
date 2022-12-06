const express = require('express');
const router = express.Router();

const {
  controllerWrapper,
  validation,
  isValidId,
} = require('../../middleware');
const { categoriesController: categoriesCtrl } = require('../../controllers');
const {
  addCategoriesSchema,
  updateCategorySoonByIdSchema,
} = require('../../models/category');

router.get('/', controllerWrapper(categoriesCtrl.getAllCategories));
router.get(
  '/:id',
  isValidId,
  controllerWrapper(categoriesCtrl.getCategoryById)
);
router.post(
  '/',
  validation(addCategoriesSchema),
  controllerWrapper(categoriesCtrl.addCategory)
);
router.put(
  '/:id',
  isValidId,
  validation(updateCategorySoonByIdSchema),
  controllerWrapper(categoriesCtrl.updateCategorySoonById)
);

module.exports = router;
