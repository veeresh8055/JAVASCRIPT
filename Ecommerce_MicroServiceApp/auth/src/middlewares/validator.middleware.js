const {body , validationResult } = require('express-validator')

const respondWithValidationErrors = (req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() })
    }
    next();
}

const registeUserValidation = [
    body("username")
    .isString()
    .withMessage("Username must be String")
    .isLength({min:3})
    .withMessage("Username must be atleast 3 characters"),

    body("email")
    .isEmail()
    .withMessage("Invalid email address"),

    body("password")
    .isLength({min:6})
    .withMessage("Password must be at least 6 character long"),

    body("fullName.firstName")
    .isString()
    .withMessage("Firstname must be String")
    .notEmpty()
    .withMessage("FirstName is required"),

    body("fullName.lastName")
    .isString()
    .withMessage("lastName must be Sting")
    .notEmpty()
    .withMessage("LastName required"),

    respondWithValidationErrors

]

const loginUserValidation = [
    body("email")
    .isEmail()
    .withMessage("Invalid email address"),

    body("password")
    .isLength({min:6})
    .withMessage("Password must be at least 6 character long"),

    respondWithValidationErrors
]


module.exports = {
    registeUserValidation,
    loginUserValidation
}
