const { v4: uuidv4 } = require("uuid");
exports.products = [
  {
    id: uuidv4(),
    productName: "Apple",
    price: 350,
  },
  {
    id: uuidv4(),
    productName: "Orange",
    price: 250,
  },
  {
    id: uuidv4(),
    productName: "Greps",
    price: 300,
  },
];
