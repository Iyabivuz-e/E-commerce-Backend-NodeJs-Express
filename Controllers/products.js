// const verifyToken = require("../jwt/verifyToken");
const Product = require("../models/Product");


// *****CREATE A PRODUCT******
const createProduct = async (req, res) => {
	const newProduct = new Product(req.body);

	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

/*******Get all products********/
const getAllProducts = async (req, res) => {
	const qNew = req.query.new;
	const qCategories = req.query.category;

	try {
		let products;
		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(1);
		} else if (qCategories) {
			products = await Product.find({
				categories: {
					$in: [qCategories],
				},
			});
		} else {
			products = await Product.find();
		}
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /*******Get a product********/
const getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /*******Update Product********/
const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /***** Delete User***** */
const deleteProduct = async (req, res) => {
	try {
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	createProduct,
	getAllProducts,
	getProduct,
	updateProduct,
	deleteProduct,
};
