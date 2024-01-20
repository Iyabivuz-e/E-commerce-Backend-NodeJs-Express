const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true, unique: true },
		products: [
			{
				productId: {
					type: String,
				},
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
		amount: { type: String, required: true },
		address: { type: Object, require: true }, //We made it object type because we will be needing different address..
		status: { type: String, default: "Pending.." },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Order", OrderSchema);
