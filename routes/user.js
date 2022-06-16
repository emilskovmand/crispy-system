var express = require("express");
var router = express.Router();
var listUsers = require("../route_methods/userMethods/listUsers");
var addUser = require("../route_methods/userMethods/addUser");
var updateUser = require("../route_methods/userMethods/updateUser");
var disableUser = require("../route_methods/userMethods/disableUser");
var enableUser = require("../route_methods/userMethods/enableUser");
var passport = require("passport");
var userModel = require("../models/User");

// ROUTE: /user/list
router.get("/list", async (req, res) => {
    var listResults = await listUsers();
    res.json(listResults).status(200);
});

// ROUTE: /user/getUser
router.get("/getUser", async (req, res) => {
    res.json(req.user).status(200);
});

// ROUTE: /user/add
router.post("/add", async (req, res) => {
    var addResult = await addUser(req.body.Name, req.body.Email, req.body.Password);
    if (addResult) {
        res.json({ message: "User created" }).status(200);
    } else {
        res.json({ message: "Something went wrong or user already exsists" }).status(200);
    }
});

// ROUTE: /user/update/%USERID%
router.put("/update/:_userId", async (req, res) => {
    var updateResult = await updateUser(req.params._userId, req.body.Name, req.body.Email, req.body.Password);
    if (updateResult) {
        res.json({ message: "Updated user" }).status(200);
    } else {
        res.json({ message: "Something went wrong" }).status(200);
    }
});

// ROUTE: /user/disable/%USERID%
router.post("/disable/:_userId", async (req, res) => {
    var disableResult = await disableUser(req.params._userId);
    if (disableResult) {
        res.json({ message: "User disabled", success: true }).status(200);
    } else {
        res.json({ message: "Something went wrong or user is already disabled", success: false }).status(200);
    }
});

// ROUTE: /user/enable/%USERID%
router.post("/enable/:_userId", async (req, res) => {
    var enableResult = await enableUser(req.params._userId);
    if (enableResult) {
        res.json({ message: "User enabled", success: true }).status(200);
    } else {
        res.json({ message: "Something went wrong or user is already enabled", success: false }).status(200);
    }
});

// ROUTE: /user/login
router.post("/login", async (req, res, next) => {
    passport.authenticate("local", { session: true, successRedirect: "/", failureRedirect: "/login" }, (err, user, info) => {
        if (err) {
            res.status(500);
            res.json(err);
            console.error(err);
        }
        if (!user) {
            res.json({ message: "No user exists", success: false });
            res.status(200);
        } else {
            req.logIn(user, (err) => {
                if (err) {
                    res.status(500);
                    res.json(err);
                    console.error(err);
                }
                res.json({ message: "Login success", success: true });
            });
        }
    })(req, res, next);
});

// ROUTE: /user/logout
router.get("/logout", async (req, res, next) => {
    if (req.user) {
        req.logOut((err) => {
            if (err) {
                return next(err);
            }
        });
        res.send({ message: "Logged out.", success: true });
        res.status(200);
    } else {
        res.send({ message: "Not logged in.", success: false });
        res.status(200);
    }
});

module.exports = router;
