const express = require("express");
const { saveCheckbox } = require("../controller/calendar.js");
const { requireSignin } = require("../middelware/middleware.js");

const router = express.Router();

router.post("/saveCheckbox", saveCheckbox);



module.exports = router;
