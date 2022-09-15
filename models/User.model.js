const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  sum: {
    type: Number,
    default: 0,
  },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const User = mongoose.model("User", schema);

module.exports = User;
