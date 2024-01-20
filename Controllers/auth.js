const User = require("../models/Users");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
	const encryptedPassword = cryptoJs.AES.encrypt(
		req.body.password,
		process.env.PASS_SECR,
	).toString();

	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: encryptedPassword,
	});

	try {
		const savedUser = await newUser.save();
		res.status(200).json(savedUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

// Login User
const loginUser = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const decryptedPassword = cryptoJs.AES.decrypt(
			user.password,
			process.env.PASS_SECR,
		).toString(cryptoJs.enc.Utf8);

		if (decryptedPassword !== req.body.password) {
			return res.status(401).json({ error: "Incorrect password" });
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SECR,
			{ expiresIn: "3d" },
		);

		const { password, ...others } = user._doc; // To hide the password in the responses.
		res.status(200).json({ ...others, accessToken });
	} catch (error) {
		console.log(error);
	}
};

module.exports = { registerUser, loginUser };
