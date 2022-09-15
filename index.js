const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(require("./routes/basket.routes"));
app.use(require("./routes/category.route"));
app.use(require("./routes/product.route"));
app.use(require("./routes/user.route"));

mongoose.connect(
  "mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/Pharmacy",
  function () {
    console.log("Подключено к монго");
  }
);

app.listen(port, function () {
  console.log("Сервер запущен.");
});
