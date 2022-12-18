const express = require('express');
const router = express.Router();

const { controllerWrapper, validation } = require('../../middleware');
const { categoriesController: categoriesCtrl } = require('../../controllers');
const {
  addCategoriesSchema,
  updateCategorySoonByIdSchema,
} = require('../../models/category');

router.get('/', controllerWrapper(categoriesCtrl.getAllCategories));
router.get(
  '/:id',

  controllerWrapper(categoriesCtrl.getCategoryById)
);
router.post(
  '/',
  validation(addCategoriesSchema),
  controllerWrapper(categoriesCtrl.addCategory)
);
router.put(
  '/:id',
  validation(updateCategorySoonByIdSchema),
  controllerWrapper(categoriesCtrl.updateCategorySoonById)
);

router.delete('/:id', controllerWrapper(categoriesCtrl.removeCategoryById));

module.exports = router;
