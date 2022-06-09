var express = require("express");
var router = express.Router();

var operations = require("../route_methods/operations.js")

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ message: "Fedt" }).status(200);
});

router.post("/operations/:_operation", function (req, res, next) {
    var operation = req.params._operation
    var num1 = req.body.num1
    var num2 = req.body.num2


    switch(operation) {
        case "addition":
            res.json({ result: operations.addition(num1, num2) }).status(200);
            break;
        case "subtraction":
            res.json({ result: operations.subtraction(num1, num2) }).status(200);
            break;
        case "multiplication":
            res.json({ result: operations.multiplication(num1, num2) }).status(200);
            break;
        case "division":
            res.json({ result: operations.division(num1, num2) }).status(200);
            break;
        default:
            res.json({ error: "Invalid operation" }).status(400);
    }

});

module.exports = router;