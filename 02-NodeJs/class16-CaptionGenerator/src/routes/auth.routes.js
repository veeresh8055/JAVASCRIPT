import express from 'express'
import userModel from '../models/user.model.js'
import mongoose, { mongo } from 'mongoose';
import {registerController , loginController} from '../controller/auth.controller.js';


const router = express.Router();

router.post('/register',registerController)

router.post('/login' , loginController)

export default router; 