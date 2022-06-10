var express = require("express");
var router = express.Router();

/* GET user page. */
router.get("/list", function (req, res,) {
    res.json({ message: "Read" }).status(200);
});

router.post("/add", function (req, res) {
    res.json({message: "Create"}).status(200);
}); 

router.put("/update/:_userId", function (req, res) {
    res.json({message: "Update"}).status(200);
});

router.post("/disable/:_userId", function (req, res) {
    res.json({message: "Disable"}).status(200);
});

module.exports = router;
