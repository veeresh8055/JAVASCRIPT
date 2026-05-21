import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/auth.middleare.js';
import createPostController from '../controller/post.controller.js';

import multer from 'multer'

const upload = multer({storage:multer.memoryStorage() })

// api/posts [protected] {image-file}
router.post('/' , 
    authMiddleware , // req.user = userData 
   upload.single("image"),
    createPostController
)
 


export default  router;