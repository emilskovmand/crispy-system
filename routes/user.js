var express = require("express");
var router = express.Router();
var listUsers = require("../route_methods/userMethods/listUsers");
var addUser = require("../route_methods/userMethods/addUser");
var updateUser = require("../route_methods/userMethods/updateUser");
var disableUser = require("../route_methods/userMethods/disableUser");
var enableUser = require("../route_methods/userMethods/enableUser");
var profilePicture = require("../route_methods/userMethods/profilePicture")
var passport = require("passport");
var userModel = require("../models/User");
var stream = require("stream");

// ROUTE: /user/list
router.get("/list", async (req, res) => {
    var listResults = await listUsers();
    res.json(listResults).status(200);
});

// ROUTE: /user/getUser
router.get("/getUser", async (req, res) => {
    res.json(req.user).status(200);
});

// ROUTE: /user/uploadPicture/%USERID%
router.post("/uploadPicture/:_userId", async (req, res) => {
    try {
        await profilePicture(req, res, req.params._userId);
    } catch (error) {
        console.error(error);
        res.json({message: "Something went wrong.", success: false }).status(200)
    }
})

// ROUTE: /user/Picture/%USERID%
router.get("/picture/:_userId", async (req, res) => {
    var image = await userModel.findById(req.params._userId).select('ProfilePicture');
    if (image.ProfilePicture.contentType) {
        res.setHeader('Content-Type',image.ProfilePicture.contentType);
        var readable = stream.Readable.from(image.ProfilePicture.data);
        readable.pipe(res);
        res.status(200);
    } else {
        res.json({message: "No image is stored on this profile"}).status(200)
    }
})

// ROUTE: /user/Picture
router.get("/picture", async (req, res) => {
    if (req.user) {
        var image = await userModel.findById(req.user._id).select('ProfilePicture');
        if (image.ProfilePicture.contentType) {
            res.setHeader('Content-Type',image.ProfilePicture.contentType);
            var readable = stream.Readable.from(image.ProfilePicture.data);
            readable.pipe(res);
            res.status(200);
        } else {
            res.json({message: "No image is stored on this profile"}).status(200)
        }
    } else {
        res.json({message: "Not logged in."}).status(200) 
    }
})

// ROUTE: /user/add
router.post("/add", async (req, res) => {
    var addResult = await addUser(req.body.Name, req.body.Email, req.body.Password);
    if (addResult) {
        res.json({ message: "User created" }).status(200);
    } else {
        res.json({ message: "Something went wrong or user already exsists" }).status(500);
    }
});

// ROUTE: /user/update/%USERID%
router.put("/update/:_userId", async (req, res) => {
    var updateResult = await updateUser(req.params._userId, req.body.Name, req.body.Email, req.body.Password);
    if (updateResult) {
        res.json({ message: "Updated user" }).status(200);
    } else {
        res.json({ message: "Something went wrong" }).status(500);
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
            res.json(err).status(500);
            console.error(err);
        }
        if (!user) {
            // successful but "Non-Authoritative Information"
            res.json({ message: "No user exists", success: false }).status(203);
        } else {
            req.logIn(user, (err) => {
                if (err) {
                    res.json(err).status(500);
                    console.error(err);
                }
                res.status(200);
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
        res.send({ message: "Logged out.", success: true }).status(200);
    } else {
        res.send({ message: "Not logged in.", success: false }).status(200);
    }
});

module.exports = router;
