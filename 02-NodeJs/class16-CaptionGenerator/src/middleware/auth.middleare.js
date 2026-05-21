import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  //check user token is authorized or not

  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized User, pl LOGIN",
    });
  }

  try {
    //decode the user
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    //find the user by using decode.id
    const user =  await userModel.findOne({
      _id: decode.id,
    });

    if (!user) {
      return res.status(401).json({
        message: "User not found, pl LOGIN.",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Something wen wrong pl LOGIN.",
    });
  }
};

export default authMiddleware;
