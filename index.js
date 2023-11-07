const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/db");

const server = express();
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const ProductRouter = require("./src/api/routes/product.routes");
server.use("/products", ProductRouter);

const CategoryRouter = require("./src/api/routes/category.routes");
server.use("/categories", CategoryRouter);

server.use("*", (req, res) => {
  res.end("Route not found");
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});