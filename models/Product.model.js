const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  price: Number,
  withRecipe: {
    type: Boolean,
    default: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
