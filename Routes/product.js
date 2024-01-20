const router = require("express").Router();
const {
	createProduct,
	getAllProducts,
	getProduct,
	updateProduct,
	deleteProduct,
} = require("../Controllers/products");

// *********POST A PRODUCT*********
router.route("/").post(createProduct);

// *********GET ALL PRODUCT*********
router.route("/").get(getAllProducts);

// // *********GET A PRODUCT*********
router.route("/:id").get(getProduct);

// // *********UPDATE A PRODUCT*********
router.route("/:id").put(updateProduct);

// // *********DELETE A PRODUCT*********
router.route("/:id").delete(deleteProduct);

module.exports = router;
