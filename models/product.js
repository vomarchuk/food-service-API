const { Schema, model } = require('mongoose');
const Joi = require('joi');

const productSchema = Schema(
  {
    productName: {
      type: String,
      required: [true, 'Set name for product'],
    },
    productImage: {
      type: String,
      default: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
    },
    price: {
      type: Number,
      required: [true, 'Set price for product'],
    },
    weight: {
      type: Number,
      default: null,
    },
    chunks: {
      type: Number,
      default: null,
    },
    promotion: {
      type: Boolean,
      default: false,
    },
    promotionPrice: {
      type: Number,
      default: null,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  { versionKey: false, timestamps: true }
);

const addProductSchema = Joi.object({
  productName: Joi.string(),
  productImage: Joi.string(),
  price: Joi.number(),
  weight: Joi.number(),
  chunks: Joi.number(),
  promotion: Joi.boolean(),
  promotionPrice: Joi.number(),
});
const Product = model('product', productSchema);
module.exports = { Product, addProductSchema };
