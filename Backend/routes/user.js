const express = require('express')
const { signup,signin } = require('../controller/user')
const { validateSignupRequest,validateSigninRequest,isRequestValidated } = require('../validator/validator.js')
const router = express.Router()

router.post('/signin',validateSigninRequest,isRequestValidated,signin)
router.post('/signup',validateSignupRequest,isRequestValidated,signup)

module.exports = router