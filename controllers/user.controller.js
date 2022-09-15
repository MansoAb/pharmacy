const User = require("../models/User.model");
const Basket = require("../models/Basket.model");

module.exports.userControllers = {
  addUser: async (req, res) => {
    const { name } = req.body;
    try {
      const user = await User.create({ name });
      await Basket.create({ user: user._id });
      res.json("Аккаунт создан.");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      await User.findByIdAndRemove(id);
      res.json("Аккаунт удален.");
    } catch (err) {
      res.json(err.message);
    }
  },
  topUpAccount: async (req, res) => {
    const { id } = req.params;
    const { sum } = req.body;
    try {
      const user = await User.findById(id);
      await user.updateOne({ sum: user.sum + sum });
      res.json("Счет пополнен.");
    } catch (err) {
      res.json(err.message);
    }
  },
};
