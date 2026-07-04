const {Router} = require('express')
const media  = require('../config/multer');
const { createPost } = require('../controllers/postController');

const router = Router()

//Create post 
router.post('/post' , media.single("post") ,  createPost) 

// //all post 
// router.get('/post')


// // single post 
// router.get('/post/:id')


// // update post 
// router.put('/post/:id')


// // delete post
// router.delete('/post/:id')


module.exports = router ; 