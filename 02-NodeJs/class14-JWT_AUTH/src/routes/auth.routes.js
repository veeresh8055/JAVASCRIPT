import express from 'express'
import userModel from '../model/user.model.js';
import jwt, { decode } from 'jsonwebtoken'

const router = express.Router();

// register api 
router.post("/register" , async (req,res) =>{
    const  {username , password } = req.body ;

    const isExist = await userModel.findOne({
        username 
    })
  

    if(isExist){
       return res.status(409).json({
        message:"Username is already exist , use Different "
       })
    }

    const user = await userModel.create({
        username , password
    })

    const token = jwt.sign({id : user._id} , process.env.JWT_SECRET)

    res.cookie("token" , token)

    res.status(200).json({
        message:"User Created Successful",
        user
    })  
})

// 
router.get('/user' , async (req,res) =>{
    const {token } = req.cookies

    if(!token){
        return res.status(401).json({
            message:"unauthorized"
        })
    }

      try{
          const decoded = jwt.verify(token , process.env.JWT_SECRET)

          const user = await userModel.findOne({
            _id:decoded.id
          })

          res.status(200).json({
            message:"user found ",
            user
          })

      }catch(err){
          res.status(401).json({
            message:"username not found"
          })
      } 


})

export default router ; 