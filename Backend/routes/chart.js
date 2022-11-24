const express = require("express");
const { displayfooditems, makechart, getchart } = require("../controller/chart.js");
const { requireSignin } = require("../middelware/middleware.js");

const router = express.Router();

router.get("/:target", displayfooditems);
router.post("/makeChart", makechart);
router.post("/getChart", getchart);


module.exports = router;
