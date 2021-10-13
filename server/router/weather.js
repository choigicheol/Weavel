var express = require("express");
var router = express.Router();
const { accessToken } = require("../middleware/accessToken");
const { weatherController } = require("../controller");

// city
router.get("/city", weatherController.city);

// area
router.get("/area", weatherController.area);

module.exports = router;
