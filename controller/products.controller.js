let { products } = require("../model/products.model");
const { v4: uuidv4 } = require("uuid");
const getProducts = (req, res) => {
  res.status(200).send(products);
};
const createProducts = (req, res) => {
  const { productName, price } = req.body;
  const newProduct = {
    id: uuidv4(),
    productName,
    price,
  };
  products.push(newProduct);
  res.status(201).send(products);
};
const updateProducts = (req, res) => {
  const productId = req.params.id;
  const { productName, price } = req.body;

  products
    .filter((product) => product.id === productId)
    .map((selectedProduct) => {
      selectedProduct.productName = productName;
      selectedProduct.price = price;
    });
  res.status(200).send(products);
};
const deleteProducts = (req, res) => {
  const productId = req.params.id;

  products = products.filter((product) => product.id !== productId);
  res.status(200).send(products);
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
