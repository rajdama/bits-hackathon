const express = require('express')
const { datecheck,postchecks } = require('../controller/home.js')
const { requireSignin } = require('../middelware/middleware.js')

const router = express.Router()

router.post('/home/dateCheck',requireSignin,datecheck)
router.post('/home/postChecks',requireSignin,postchecks)

module.exports = router