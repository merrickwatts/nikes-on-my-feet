const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reviewSchema;
