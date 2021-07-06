"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDname = exports.UpdateProduct = exports.GetProductByCategory = exports.GetAllProducts = exports.GetProductName = exports.GetProductId = exports.RemoveProduct = exports.AddProduct = void 0;
const firebaseconfig_1 = require("../../config/firebaseconfig");
const ProductDname = "products";
exports.ProductDname = ProductDname;
const AddProduct = async (req, res) => {
    const { name, desc, price, category } = req.body;
    const product = await firebaseconfig_1.fireDb.collection(ProductDname).doc();
    try {
        const productObject = {
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
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.AddProduct = AddProduct;
const RemoveProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await firebaseconfig_1.fireDb.collection(ProductDname).doc(id);
        await product.delete();
        return res.status(200).json({
            message: "Product deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            error,
        });
    }
};
exports.RemoveProduct = RemoveProduct;
const GetAllProducts = async (req, res) => {
    try {
        const products = await firebaseconfig_1.fireDb.collection(ProductDname).get();
        const allProducts = await products.docs;
        const Snapdata = await allProducts.map((item) => item.data());
        return res.status(200).json({
            message: "successfully ",
            data: Snapdata,
        });
    }
    catch (error) {
        return res.status(500).json({
            error,
        });
    }
};
exports.GetAllProducts = GetAllProducts;
const UpdateProduct = async (req, res) => {
    const { name, desc, price, category, image_url } = req.body;
    const { id } = req.params;
    try {
        const Product = await firebaseconfig_1.fireDb.collection(ProductDname).doc(id);
        const currentProduct = (await Product.get()).data() || {};
        const updateObject = {
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
    }
    catch (error) {
        return res.status(500).json({
            error,
        });
    }
};
exports.UpdateProduct = UpdateProduct;
const GetProductId = async (req, res) => { };
exports.GetProductId = GetProductId;
const GetProductName = async (req, res) => { };
exports.GetProductName = GetProductName;
const GetProductByCategory = async (req, res) => { };
exports.GetProductByCategory = GetProductByCategory;
//# sourceMappingURL=productService.js.map