const { Router } = require("express");
const router = Router();
const { basketControllers } = require("../controllers/basket.controller");

router.patch("/basket/:id", basketControllers.clearBasket);
router.patch("/basket/:id/:productId/:userId", basketControllers.payProduct);
router.patch(
  "/basket/:basketId/:productId",
  basketControllers.removeProductFromBasket
);

module.exports = router;
