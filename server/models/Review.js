const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    user_id: {
      type: String,
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Shoe",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
