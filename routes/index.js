var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ message: "Fedt" }).status(200);
});

/* GET home page. */
router.get("/test", function (req, res, next) {
    res.json({ message: "Fedt" }).status(200);
});

module.exports = router;
