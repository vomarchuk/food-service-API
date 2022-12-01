const express = require('express');
const router = express.Router();

const { controllerWrapper, validation } = require('../../middleware');

const { reviewsController: reviewsCtrl } = require('../../controllers');
const { addReviewSchema } = require('../../models/review');

router.get('/');

router.post(
  '/',
  validation(addReviewSchema),
  controllerWrapper(reviewsCtrl.addReview)
);
module.exports = router;
