const {check,validationResult} = require('express-validator')

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('First name is required'),
    check('lastName')
    .notEmpty()
    .withMessage('Last name is required'),
    check('email')
    .notEmpty()
    .withMessage('Email is required'),
    check('password')
    .isLength({min:4})
    .withMessage('password must have at least 4 characters'),
]

exports.validateSigninRequest = [
    check('email')
    .notEmpty()
    .withMessage('Email is required'),
]

exports.isRequestValidated = (req,res,next) =>{
    const errors = validationResult(req)
    if(errors.array().length > 0){
    return res.status(400).json({error : errors.array()[0].msg})
    }
    next()
}