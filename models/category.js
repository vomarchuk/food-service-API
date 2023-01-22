const { Schema, model } = require('mongoose');
const Joi = require('joi');

const categorySchema = Schema(
  {
    categoryName: { type: String, required: true },
    fullName: { type: String, required: true },
    categoryImageUrl: {
      type: String,
      required: true,
      default: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
    },
    doubleCard: {
      type: Boolean,
      default: false,
    },
    soon: {
      type: Boolean,
      default: false,
    },
    typesSort: {
      DEFAULT: { type: Boolean, default: true },
      BY_NAME: { type: Boolean, default: true },
      PRICE_LOW_TO_HIGH: { type: Boolean, default: true },
      PRICE_HIGH_TO_LOW: { type: Boolean, default: true },
      NUMBER_OF_PIECES: { type: Boolean, default: false },
      WEIGHT: { type: Boolean, default: false },
    },
  },
  { versionKey: false, timestamps: true }
);
const addCategoriesSchema = Joi.object({
  categoryName: Joi.string().required(),
  fullName: Joi.string().required(),
  categoryImageUrl: Joi.string().required(),
  doubleCard: Joi.boolean(),
  soon: Joi.boolean(),
  typesSort: {
    NUMBER_OF_PIECES: Joi.boolean(),
    WEIGHT: Joi.boolean(),
  },
});

const updateCategorySoonByIdSchema = Joi.object({
  soon: Joi.boolean().required(),
});

const Category = model('category', categorySchema);

module.exports = {
  Category,
  addCategoriesSchema,
  updateCategorySoonByIdSchema,
};
