const {Router} = require('express')

const router = Router()

//Create post 
router.post('/post')

//all post 
router.get('/post')


// single post 
router.get('/post/:id')


// update post 
router.put('/post/:id')


// delete post
router.delete('/post/:id')


module.exports = router ; 