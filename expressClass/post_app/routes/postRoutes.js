const { Router } = require('express');
const media = require('../config/multer');
const {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
} = require('../controllers/postController');
const { requireAuth } = require('../middleware/auth');

const router = Router();

// Protect every post route so only logged-in users can access them.
router.use(requireAuth);

// Create a new post with one or more uploaded files.
router.post('/post', media.array("media", 10), createPost);

// Get all posts that belong to the logged-in user.
router.get('/post', getAllPosts);

// Get one post by id, but only if it belongs to the logged-in user.
router.get('/post/:id', getSinglePost);

// Update a post by id, including optional replacement media.
router.put('/post/:id', media.array("media", 10), updatePost);

// Delete a post by id, but only if it belongs to the logged-in user.
router.delete('/post/:id', deletePost);

module.exports = router;
