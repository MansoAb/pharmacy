const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
});

const Category = mongoose.model("Category", schema);

module.exports = Category;
