const verifyToken = require("../jwt/verifyToken");
// const mongoose = require("mongoose");
const User = require("../models/Users");
const CryptoJS = require("crypto-js");

/*******Get all users********/
const getAllUsers = async (req, res) => {
    const query = req.query.new
	try {
		const users = query ? await User.find().sort({_id:-1}).limit(1) : await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};
/*******Get a user********/
const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
};

/*******Update User********/
const updateUser = async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SECR,
		).toString();
	}
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

/***** Delete User***** */
const deleteUser = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = { getAllUsers, updateUser, deleteUser, getUser };
