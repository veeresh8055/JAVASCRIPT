import express from 'express'
import userModel from '../models/user.model.js';
import bcrypt from 'bcryptjs';
const router = express.Router();

router.post("/register" , async (req,res)=>{
    const {username , password} = req.body;


    const userExist = await userModel.findOne({username})
    if(userExist){
        return res.status(401).json({
            message:"user already exist."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username , password: hashedPassword
    })

    const allUsers = await userModel.find();

    res.status(200).json({
        message:"user created successfully.",
        allUsers
    })

})

router.post("/login" , async (req,res)=>{
    const {username , password} = req.body;

    const user = await userModel.findOne({username})

    if(!user){
        return res.status(401).json({
            message:"user not registered pl register first..!"
        })
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
         return res.status(401).json({
            message:"password Invalid"
         })
    }

    res.status(200).json({
        message:"user Login successful",
        user
    })
})



export default router ; 