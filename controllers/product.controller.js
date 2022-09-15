const Product = require("../models/Product.model");
const Basket = require("../models/Basket.model");

module.exports.productControllers = {
  addProduct: async (req, res) => {
    const { name, withRecipe, category, price } = req.body;
    try {
      await Product.create({ name, withRecipe, category, price });
      res.json("Лекарство добавлено.");
    } catch (err) {
      res.json(err.message);
    }
  },
  showProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id).populate("category", "name");
      res.json(product);
    } catch (err) {
      res.json(err.message);
    }
  },
  showProducts: async (req, res) => {
    try {
      const products = await Product.find().populate("category", "name");
      res.json(products);
    } catch (err) {
      res.json(err.message);
    }
  },
  showProductsByCategories: async (req, res) => {
    const { categoryId } = req.params;
    try {
      const products = await Product.find({ category: categoryId }).populate(
        "category",
        "name"
      );
      res.json(products);
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndRemove(id);
      res.json("Лекарство удалено.");
    } catch (err) {
      res.json(err.message);
    }
  },
  addProductToBasket: async (req, res) => {
    const { id, basketId } = req.params;
    try {
      const product = await Product.findById(id);
      const basket = await Basket.findById(basketId);

      if (basket.products.includes(id) === false) {
        await basket.update({
          $push: { products: id },
          total: basket.total + product.price,
        });
        return res.json("Лекарство добавлено в корзину.");
      }
      res.json("Это лекарство уже в корзине.");
    } catch (err) {
      res.json(err.message);
    }
  },
};
