const express = require("express");
const connectDB = require("./DB/ConnectDb");

const server = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/product");
const cartRoute = require("./Routes/cart");
const orderRoute = require("./Routes/order");

server.use(express.json());
server.use("/api/auth", authRoute);
server.use("/api/user", userRoute);
server.use("/api/products", productRoute);
server.use("/api/cart", cartRoute);
server.use("/api/order", orderRoute);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		server.listen(port, () => {
			console.log("DB connected and Port is listening");
		});
	} catch (error) {
		console.log(error);
	}
};
start();
