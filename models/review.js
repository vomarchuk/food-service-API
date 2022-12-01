const { Schema, model } = require('mongoose');
const Joi = require('joi');

const reviewSchema = Schema(
  {
    date: {
      type: 'string',
      require: [true, 'Set date for review'],
    },
    author: {
      type: 'string',
      require: [true, 'Set name for review'],
    },
    stars: {
      type: 'number',
      require: [true, 'Set stars for review'],
    },
    description: {
      type: 'string',
      require: [true, 'Set description for review'],
    },
  },
  { versionKey: false, timestamp: true }
);

const addReviewSchema = Joi.object({
  author: Joi.string().min(2).required(),
  stars: Joi.number().min(1).max(5).required(),
  description: Joi.string().required(),
});

const Review = model('review', reviewSchema);

module.exports = { Review, addReviewSchema };
