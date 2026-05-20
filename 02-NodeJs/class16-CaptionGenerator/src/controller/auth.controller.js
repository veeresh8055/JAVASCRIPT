import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js';
import bcrypt from 'bcryptjs';


const registerController =  async (req ,res)=>{
    const {username , password } = req.body ;

    //check username and passord is not empty 
    if(!username || !password ){
        return res.status(400).json({
            message:"fields are not empty. "
        })
    }

    //check user exist 
    const user = await userModel.findOne({username})
    if(user){
        return res.status(400).json({
            message:"username already exist "
        })
    }

    const userCreated = await userModel.create({
     username:username , password: await bcrypt.hash(password,10) 
    })

    const token =  jwt.sign({id:userCreated._id} ,process.env.JWT_SECRET )

    //storing token in cookies
    res.cookie("token" , token )

    
    res.status(200).json({
        message:"User Created Successfull",
        userCreated
    })


}

const loginController = async (req,res)=>{

   const {username , password } = req.body ;

   //username and password is empty check 
   if(!username || !password){
    return res.status(400).json({
        message:"fields are not empty. "
    })
   }

   //check user exist 
   const user = await userModel.findOne({username})

   if(!user){
    return res.status(400).json({
        message:"user not found"
    })
   }

   //if userexist check password  
   const isPasswordValid = await bcrypt.compare(password , user.password)
  if(!isPasswordValid){
    return res.status(401).json({
        message:"invalid password"
    })
  }

   //if all correct give on token 
   const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

   res.cookie("token", token)

   //res send 
   return res.status(200).json({
    message:"Login successful",
    user
   })
  
}

export   {registerController ,loginController }
