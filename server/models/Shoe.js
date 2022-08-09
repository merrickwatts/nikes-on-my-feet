const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const shoeSchema = new Schema({
  shoe_name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Integer,
    required: true,
  },
  shoe_description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  shoe_size: {
    type: Integer,
    required: true,
  },
  photo_ref: {
    type: String,
    required: true,
  },
});

const Shoe = model("Review", shoeSchema);

module.exports = Shoe;
