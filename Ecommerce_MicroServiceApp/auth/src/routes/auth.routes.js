const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const validators = require('../middlewares/validator.middleware')
const authController = require('../controllers/auth.controller')
const authMiddleware =  require('../middlewares/auth.middleware')

const router = express.Router();

// POST /api/auth/register
router.post("/register", 
    ...validators.registeUserValidation,
    registerUser);

    // POST /api/auth/login
router.post("/login",
    ...validators.loginUserValidation,
    loginUser
);

// POST /api/auth/me
router.get('/me',authMiddleware.authMiddleware ,authController.getCurrentUser)

// 


module.exports = router;
