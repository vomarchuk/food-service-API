const { Schema, model } = require('mongoose');
const { handleSchemaValidationErrors } = require('../helpers');
const Joi = require('joi');

const reviewSchema = Schema(
  {
    date: {
      type: String,
      required: [true, 'Set date for review'],
    },
    author: {
      type: String,
      required: [true, 'Set name for review'],
    },
    stars: {
      type: Number,
      required: [true, 'Set stars for review'],
    },
    description: {
      type: String,
      required: [true, 'Set description for review'],
    },
  },
  { versionKey: false, timestamps: true }
);

reviewSchema.post('save', handleSchemaValidationErrors);

const addReviewSchema = Joi.object({
  author: Joi.string().min(2).required(),
  stars: Joi.number().min(1).max(5).required(),
  description: Joi.string().required(),
});

const Review = model('review', reviewSchema);

module.exports = { Review, addReviewSchema };

//I will need to add - find a duplicate in the Database//
