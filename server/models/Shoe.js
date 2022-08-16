const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const shoeSchema = new Schema({
  shoe_name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  shoe_description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  shoe_size: {
    type: String,
    required: true,
  },
  photo_ref: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Shoe = model('Shoe', shoeSchema);

module.exports = Shoe;
