const { Router } = require("express");
const router = Router();
const { userControllers } = require("../controllers/user.controller");

router.post("/users", userControllers.addUser);
router.delete("/users/:id", userControllers.deleteUser);
router.patch("/users/:id", userControllers.topUpAccount);

module.exports = router;
