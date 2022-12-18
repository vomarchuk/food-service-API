const express = require('express');
const router = express.Router();

const { controllerWrapper, validation } = require('../../middleware');

const { reviewsController: reviewsCtrl } = require('../../controllers');
const { addReviewSchema } = require('../../models/review');

router.get('/', controllerWrapper(reviewsCtrl.getAllReviews));
router.get('/:id', controllerWrapper(reviewsCtrl.getReviewById));
router.post(
  '/',
  validation(addReviewSchema),
  controllerWrapper(reviewsCtrl.addReview)
);

router.delete('/:id', controllerWrapper(reviewsCtrl.removeReviewById));
module.exports = router;
