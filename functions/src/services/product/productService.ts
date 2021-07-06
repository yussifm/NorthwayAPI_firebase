import { fireDb } from "../../config/firebaseconfig";

import { Response, Request } from "express";
import { productDto } from "./productDto";

const ProductDname = "products";

const AddProduct = async (req: Request, res: Response) => {
	const { name, desc, price, category } = req.body;
	const product = await fireDb.collection(ProductDname).doc();
	try {
		const productObject: productDto = {
			id: product.id,
			name: name,
			desc: desc,
			price: price,
			category: category,
			image_url: "firgure it out soon",
			createdAt: "use firebase date time",
		};
		await product.set(productObject);
		return res.status(200).send({
			message: "Product added successfully",
			data: productObject,
		});
	} catch (error) {
		return res.status(500).json(error);
	}
};

const RemoveProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await fireDb.collection(ProductDname).doc(id);
		await product.delete();
		return res.status(200).json({
			message: "Product deleted successfully",
		});
	} catch (error) {
		return res.status(500).json({
			error,
		});
	}
};
const GetAllProducts = async (req: Request, res: Response) => {
	try {
		const products = await fireDb.collection(ProductDname).get();
		const allProducts = await products.docs;
		const Snapdata = await allProducts.map((item: any) => item.data());
		return res.status(200).json({
			message: "successfully ",
			data: Snapdata,
		});
	} catch (error) {
		return res.status(500).json({
			error,
		});
	}
};
const UpdateProduct = async (req: Request, res: Response) => {
	const { name, desc, price, category, image_url } = req.body;
	const { id } = req.params;
	try {
		const Product = await fireDb.collection(ProductDname).doc(id);
		const currentProduct = (await Product.get()).data() || {};
		const updateObject: productDto = {
			id: currentProduct.id,
			name: name || currentProduct.name,
			category: category || currentProduct.category,
			desc: desc || currentProduct.desc,
			price: price || currentProduct.price,
			image_url: image_url || currentProduct.image_url,
			modifiedAt: "firebase timestamp",
		};
		await Product.set(updateObject);
		return res.status(200).json({
			message: "Product updated successfully",
			data: updateObject,
		});
	} catch (error) {
		return res.status(500).json({
			error,
		});
	}
};

const GetProductByQuery = async (req: Request, res: Response) => {
	const { search } = req.query;
	try {
		const products = await fireDb
			.collection(ProductDname)
			.where("name" || "category", ">=", search)
			.get();
		const filteredProducts = products.docs || [];
		return res.status(200).json({
			data: filteredProducts,
		});
	} catch (error) {
		return res.status(500).json({
			error,
		});
	}
};

export {
	AddProduct,
	RemoveProduct,
	GetAllProducts,
	GetProductByQuery,
	UpdateProduct,
	ProductDname,
};
