const { Router } = require("express");
const routes = Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);

module.exports = routes;
