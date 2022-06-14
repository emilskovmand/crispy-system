var express = require("express");
var router = express.Router();
var translate = require("../route_methods/translation")


// ROUTE: /translation/translate
router.post("/translate", async (req, res) => {
    var translateResult = await translate(req.body.Text, req.body.Language);
    res.json(translateResult).status(200);
})

module.exports = router;