// const verifyToken = require("../jwt/verifyToken");
const Cart = require("../models/Cart");

// *****CREATE A PRODUCT******
const createCart = async (req, res) => {
	const newCart = new Cart(req.body);

	try {
		const savedCart = await newCart.save();
		res.status(200).json(savedCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

/*******Get all Carts********/
const getAllCarts = async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /*******Get a Cart********/
const getCart = async (req, res) => {
	try {
		const cart = await Cart.findOne({ id: req.params.id });
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /*******Update Cart********/
const updateCart = async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json(updatedCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /***** Delete CArt***** */
const deleteCart = async (req, res) => {
	try {
		const deletedCart = await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	createCart,
	getAllCarts,
	getCart,
	updateCart,
	deleteCart,
};
