const { Schema, model } = require('mongoose');
const Joi = require('joi');

const productSchema = Schema(
  {
    productName: {
      type: String,
      required: [true, 'Set name for product'],
    },
    price: {
      type: Number,
      required: [true, 'Set price for product'],
    },
    smallImage: {
      x1: {
        type: String,
        // required: true,
        default: '../helpers/default.img.png',
      },
      // x2: {
      //   type: String,
      //   required: true,
      // },
    },
    // largeImage: {
    //   x1: {
    //     type: String,
    //     required: true,
    //   },
    //   x2: {
    //     type: String,
    //     required: true,
    //   },
    // },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  { versionKey: false, timestamps: true }
);

const addProductSchema = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  smallImage: {
    x1: Joi.string(),
    // x2: Joi.string(),
  },
  // largeImage: {
  //   x1: Joi.string(),
  //   x2: Joi.string(),
  // },
});
const Product = model('product', productSchema);
module.exports = { Product, addProductSchema };
