const router = require("express").Router();
const {
	createOrder,
	getAllOrders,
	getOrder,
	updateOrder,
	deleteOrder,
} = require("../Controllers/orders");

// *********POST A CART*********
router.route("/").post(createOrder);

// *********GET ALL CART*********
router.route("/").get(getAllOrders); //Only for admin to get all the cart of every user.

// // *********GET A CART*********
router.route("/find/:id").get(getOrder);

// // *********UPDATE A CART*********
router.route("/:id").put(updateOrder);

// // *********DELETE A CART*********
router.route("/:id").delete(deleteOrder);

module.exports = router;
