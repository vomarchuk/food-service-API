const express = require('express');
const router = express.Router();

const { controllerWrapper } = require('../../middleware');

const { reviewsController: reviewsCtrl } = require('../../controllers');

router.get('/');

router.post('/', controllerWrapper(reviewsCtrl.addReview));
module.exports = router;
