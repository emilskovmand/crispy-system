var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");

var app = express();

// catch 404 and forward to error handler
app.use(function (req, res, next) {});
app.set("json spaces", 2); // sets JSON spaces for clarity
require("dotenv/config");
app.use(cookieParser(process.env.SECRET));

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;