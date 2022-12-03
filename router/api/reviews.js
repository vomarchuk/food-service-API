const express = require('express');
const router = express.Router();

const {
  controllerWrapper,
  validation,
  isValidId,
} = require('../../middleware');

const { reviewsController: reviewsCtrl } = require('../../controllers');
const { addReviewSchema } = require('../../models/review');

router.get('/', controllerWrapper(reviewsCtrl.getAllReviews));
// router.get('/:id',isValidId,controllerWrapper(reviewsCtrl.getById))
router.post(
  '/',
  validation(addReviewSchema),
  controllerWrapper(reviewsCtrl.addReview)
);
module.exports = router;
