const bcrypt = require("bcryptjs");
const userModel = require("../model/user.model");

async function register(req, res) {
  try {
    const { username, email, password, fullName } = req.body;

    if (!username || !email || !password || !fullName?.firstName || !fullName?.lastName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      fullName,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

module.exports = { register };
