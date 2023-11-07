const express = require("express");

const {
  getProducts,
  getProductByID,
  getProductByName,
  deleteProduct,
  createProduct,
  updateProduct,
  changePlaceholder,
} = require("../controllers/product.controller");

const ProductRouter = express.Router();

ProductRouter.get("/", getProducts);
ProductRouter.get("/byid/:id", getProductByID);
ProductRouter.get("/byname/:name", getProductByName);
ProductRouter.post("/", createProduct);
ProductRouter.patch("/:id", updateProduct);
ProductRouter.patch("/placeholder/:id", changePlaceholder);
ProductRouter.delete("/:id", deleteProduct);

module.exports = ProductRouter;