import express from 'express'
import {registerController , loginController} from '../controller/auth.controller.js';


const router = express.Router();

// register api 
router.post('/register',registerController)

// login api 
router.post('/login' , loginController)


export default router; 