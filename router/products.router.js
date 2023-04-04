const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controller/products.controller");

const router = require("express").Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;
