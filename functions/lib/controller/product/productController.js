"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const productService_1 = require("../../services/product/productService");
const ProductController = express.Router();
ProductController.get("/products", productService_1.GetAllProducts);
ProductController.get("/products/:id", productService_1.GetProductId);
ProductController.get("/products/:name", productService_1.GetProductName);
ProductController.get("/products/:category", productService_1.GetProductByCategory);
ProductController.post("/products", productService_1.AddProduct);
ProductController.delete("/products/:id", productService_1.RemoveProduct);
ProductController.patch("/products/:id", productService_1.UpdateProduct);
exports.default = ProductController;
//# sourceMappingURL=productController.js.map