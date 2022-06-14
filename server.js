var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");

const port = process.env.PORT || 3001;

var app = express();

app.use(express.json()); // parses header requests (req.body)
app.use(methodOverride("_method"));
app.set("json spaces", 2); // sets JSON spaces for clarity
require("dotenv/config");

app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60 * 60 * 24 * 1000 },
        store: MongoStore.create({ mongoUrl: process.env.DB_CONNECTION_STRING }),
    })
);

app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

var indexRouter = require("./routes/index");
app.use("/index", indexRouter);

var userRouter = require("./routes/user");
app.use("/user", userRouter);

var translationRouter = require("./routes/translation");
app.use("/translation", translationRouter);

// Forbind til MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to MongoDB!");
    }
});

// Lyt til port 3001 ELLLER den dynamiske port fra hosten
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
