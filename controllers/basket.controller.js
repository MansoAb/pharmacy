const Basket = require("../models/Basket.model");
const User = require("../models/User.model");
const Product = require("../models/Product.model");

module.exports.basketControllers = {
  clearBasket: async (req, res) => {
    const { id } = req.params;
    try {
      await Basket.findByIdAndUpdate(id, { products: [] });
      res.json("Корзина очищена.");
    } catch (err) {
      res.json(err.message);
    }
  },
  removeProductFromBasket: async (req, res) => {
    const { basketId, productId } = req.params;
    try {
      await Basket.findByIdAndUpdate(basketId, {
        $pull: { products: productId },
      });
      res.json("Product deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  payProduct: async (req, res) => {
    const { userId, id, productId } = req.params;
    try {
      const product = await Product.findById(productId);
      const user = await User.findById(userId);
      const basket = await Basket.findById(id);
      if (
        (user.recipes.includes(productId) || product.withRecipe === false) &&
        basket.products.length > 0 &&
        user.sum >= product.price
      ) {
        await user.updateOne({ sum: user.sum - product.price });
        await basket.update({
          total: basket.total - product.price,
          $pull: { products: productId },
        });

        return res.json(
          "Продукты оплачены, заказ прибудет через несколько дней."
        );
      } else if (basket.products.length < 1) {
        return res.json("Такого лекарства в корзине нет.");
      } else if (user.sum < product.price) {
        return res.json("Вам не хватает денег, чтобы купить это лекарство.");
      }
      return res.json("У вас нет рецепта на это лекарство.");
    } catch (err) {
      res.json(err.message);
    }
  },
};
