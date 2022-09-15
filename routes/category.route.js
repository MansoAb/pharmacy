const { Router } = require("express");
const router = Router();
const { categoryControllers } = require("../controllers/category.controllers");

router.post("admin/categories", categoryControllers.addCategory);
router.delete("admin/categories/:id", categoryControllers.deleteCategory);
router.get("/categories", categoryControllers.showCategories);

module.exports = router;
