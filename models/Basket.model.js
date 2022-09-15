const mongoose = require("mongoose");

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  total: {
    type: Number,
    default: 0,
  },
});

const Basket = mongoose.model("Basket", schema);

module.exports = Basket;
