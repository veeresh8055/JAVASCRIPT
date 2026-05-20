import express from 'express'
import authMiddleware from '../middleware/auth.middleare';

const router = express.Router();

//API with protected
router.post('/' , authMiddleware , createPostController)
 


export default  router;