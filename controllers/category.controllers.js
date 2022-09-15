const Category = require("../models/Category.model");

module.exports.categoryControllers = {
  addCategory: async (req, res) => {
    const { name } = req.body;
    try {
      await Category.create({ name });
      res.json("Category created");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;
    try {
      await Category.findByIdAndRemove(id);
      res.json("Category deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  showCategories: async (req, res) => {
    try {
      const categories = Category.find();
      res.json(categories);
    } catch (err) {
      res.json(err.message);
    }
  },
};
