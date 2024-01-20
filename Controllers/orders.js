// const verifyToken = require("../jwt/verifyToken");
const Order = require("../models/Order");

// *****CREATE A PRODUCT******  //Make an order..
const createOrder = async (req, res) => {
	const newOrder = new Order(req.body);

	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

/*******Get all Orders********/
const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /*******Get User Orders********/  //users can get more than one order.
const getOrder = async (req, res) => {
	try {
		const order = await Order.find({ id: req.params.id });
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /*******Update the Order********/
// ********Only For Admin**** //
const updateOrder = async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

// /***** Delete the Order***** */
// ********Only For Admin**** //
const deleteOrder = async (req, res) => {
	try {
		const deletedOrder = await Order.findByIdAndDelete(req.params.id);
		res.status(200).json("Order is deleted sucessfully!");
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	createOrder,
	getAllOrders,
	getOrder,
	updateOrder,
	deleteOrder,
};
