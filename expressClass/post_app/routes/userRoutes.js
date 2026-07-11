const {Router } = require('express')
const { register, login, me } = require('../controllers/userController.js')
const { requireAuth } = require('../middleware/auth.js')

const router = Router()

// Register a new user account.
router.post( '/register' ,  register)

// Log in an existing user and return a JWT token.
router.post("/login" , login)

// Return the authenticated user's profile.
router.get("/me", requireAuth, me)

module.exports = router 
