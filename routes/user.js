var express = require("express");
var router = express.Router();
var listUsers = require('../route_methods/userMethods/listUsers')
var addUser = require('../route_methods/userMethods/addUser')
var updateUser = require('../route_methods/userMethods/updateUser')
var disableUser = require('../route_methods/userMethods/disableUser')
var enableUser = require('../route_methods/userMethods/enableUser')

/* GET user page. */
router.get("/list", async (req, res) => {
    var listResults = await listUsers()
    res.json(listResults).status(200);
});

router.post("/add", async (req, res) => {
    var addResult = await addUser(req.body.Name, req.body.Email, req.body.Password)
    if (addResult) {
        res.json({message: "User created"}).status(200);
    } else {
        res.json({message: "Something went wrong or user already exsists"}).status(200);
    }
}); 

router.put("/update/:_userId", async (req, res) => {
    var updateResult = await updateUser(req.params._userId, req.body.Name, req.body.Email, req.body.Password)
    if (updateResult) {
        res.json({message: "Updated user"}).status(200);        
    } else {
        res.json({message: "Something went wrong"}).status(200);
    }
});

router.post("/disable/:_userId", async (req, res) => {
    var disableResult = await disableUser(req.params._userId)
    if (disableResult) {
        res.json({message: "User disabled"}).status(200);
    } else {
        res.json({message: "Something went wrong or user is already disabled"}).status(200);
    }
});

router.post("/enable/:_userId", async (req, res) => {
    var enableResult = await enableUser(req.params._userId)
    if (enableResult) {
        res.json({message: "User enabled"}).status(200);
    } else {
        res.json({message: "Something went wrong or user is already enabled"}).status(200);        
    }
});

module.exports = router;
