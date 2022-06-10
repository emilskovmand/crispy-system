const userModel = require("./models/User");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use(
        new localStrategy((Username, Password, done) => {
            userModel.findOne({ $or: [{ Name: Username }, { email: Username }] }, (err, user) => {
                if (err) return done(err, false);
                if (!user) return done(null, false);
                bcrypt.compare(Password, user.Password, (err, result) => {
                    if (err) return done(err, false);
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        userModel.findOne({ _id: id }, (err, user) => {
            if (user) {
                const userInformation = {
                    _id: user._id,
                    name: user.Name,
                    email: user.Email,
                };
                cb(err, userInformation);
            } else {
                cb(err, null);
            }
        });
    });
};
