const router = require("express").Router();
const {
	createCart,
	getAllCarts,
	getCart,
	updateCart,
	deleteCart,
} = require("../Controllers/cart");

// *********POST A CART*********
router.route("/").post(createCart);

// *********GET ALL CART*********
router.route("/").get(getAllCarts); //Only for admin to get all the cart of every user.

// // *********GET A CART*********
router.route("/find/:id").get(getCart);

// // *********UPDATE A CART*********
router.route("/:id").put(updateCart);

// // *********DELETE A CART*********
router.route("/:id").delete(deleteCart);

module.exports = router;
