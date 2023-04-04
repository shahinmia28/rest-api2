const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./router/users.router");
const productsRouter = require("./router/products.router");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/home.html");
});
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 page not found</h1>`);
});
module.exports = app;
