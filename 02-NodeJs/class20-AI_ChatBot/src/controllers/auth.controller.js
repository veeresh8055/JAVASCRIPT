import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import mongoose from "mongoose";


const registerController = async (req, res) => {
  const {
    email,
    fullName: { firstName, lastName },
    password,
  } = req.body;

  if (!email || !fullName || !firstName || !password) {
    return res.status(401).json({
      message: "fill all the inputs",
    });
  }

  //find user already exist or not 
  const isUserExist = await userModel.findOne({
    email,
  });

  // if user exist return user already exist
  if (isUserExist) {
    return res.status(400).json({
      message: "EMAIL ALREADY EXISTS",
    });
  }

  //create account if user not exist
  const user = await mongoose.create({
    email,
    fullName: {
      firstName,
      lastName,
    },
    password: await bcrypt.hash(password, 10),
  });

  //create user token 
  const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)

  // add token in cookies
  res.cookie("token" , token)


  res.status(200).json({
    message: "user registered Successfully",
    user:{
      email:user.email,
      _id:user._id,
      fullName:user.fullName
    }
  });
};

const loginController = async (req, res) => {
  const {email , password} = req.body;

  if(!email || !password ){
    return res.status(400).json({
      message:"all fields are required"
    })
  }

  const user = await mongoose.findOne({
    email
  })
 
  if(!user){
    return res.status(401).json({
      message:"user not found"
    })
  }

  const isPasswordValid = await bcrypt.compare(password , user.password)

  if(!isPasswordValid){
    return res.status(401).json({
      message:"password invalid"
    })
  }

  //create new token
  const token = jwt.sign({id:user._id} , process.env.JWT_SECRETE)


  //add in cookie
res.cookie("token" , token)


//login successful
 res.status(200).json({
  message:"user login Successful",
  user
 })

};

export { registerController, loginController };
