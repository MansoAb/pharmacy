const { Router } = require("express");
const router = Router();
const { productControllers } = require("../controllers/product.controller");

router.post("admin/products", productControllers.addProduct);
router.patch(
  "/products/:id/basket/:basketId",
  productControllers.addProductToBasket
);
router.delete("/admin/products/:id", productControllers.deleteProduct);
router.get("/products/:id", productControllers.showProduct);
router.get("/products", productControllers.showProducts);
router.get(
  "/products/category/:categoryId",
  productControllers.showProductsByCategories
);

module.exports = router;
