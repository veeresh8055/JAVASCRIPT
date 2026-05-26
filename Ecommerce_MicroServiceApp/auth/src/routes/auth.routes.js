const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const validators = require('../middlewares/validator.middleware')


const router = express.Router();

router.post("/register", 
    ...validators.registeUserValidation,
    registerUser);
router.post("/login",
    ...validators.loginUserValidation,
    loginUser
);

module.exports = router;
