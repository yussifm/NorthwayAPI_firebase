import * as express from "express";
import {
	AddProduct,
	RemoveProduct,
	GetAllProducts,
	GetProductByQuery,
	UpdateProduct,
} from "../../services/product/productService";

const ProductController = express.Router();

ProductController.get("/products", GetAllProducts);
ProductController.get("/products/:search", GetProductByQuery);
ProductController.post("/products", AddProduct);
ProductController.delete("/products/:id", RemoveProduct);
ProductController.patch("/products/:id", UpdateProduct);

export default ProductController;