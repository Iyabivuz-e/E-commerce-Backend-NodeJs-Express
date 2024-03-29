const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		descr: { type: String, required: true },
		img: { type: String, required: true },
		categories: { type: Array },
		size: { type: String },
		price: { type: Number, required: true },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
