import express from 'express'
import userModel from '../models/user.model.js'
import mongoose, { mongo } from 'mongoose';
import {register , login} from '../controller/auth.controller.js';


const router = express.Router();

router.post('/register',register)

router.post('/login' , login)

export default router; 