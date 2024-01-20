const {
	getAllUsers,
	updateUser,
	deleteUser,
	getUser,
} = require("../Controllers/users");

const router = require("express").Router();

//  Get All User
router.route("/").get(getAllUsers);
//  Get User
router.route("/find/:id").get(getUser);
// Update User
router.route("/:id").put(updateUser);
// Delete User
router.route("/:id").delete(deleteUser);

module.exports = router;
