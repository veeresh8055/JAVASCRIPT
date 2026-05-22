import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized user",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decode.id,
    });

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({
      message: "unauthorized user",
    });
  }
};

export default authMiddleware;
