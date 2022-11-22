const express = require("express");
const { displayfooditems } = require("../controller/chart.js");
const { requireSignin } = require("../middelware/middleware.js");

const router = express.Router();

router.get("/:target", displayfooditems);

module.exports = router;
