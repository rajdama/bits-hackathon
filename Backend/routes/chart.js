const express = require("express");
const { displayfooditems, makechart } = require("../controller/chart.js");
const { requireSignin } = require("../middelware/middleware.js");

const router = express.Router();

router.get("/:target", displayfooditems);
router.post("/makeChart", makechart);


module.exports = router;
