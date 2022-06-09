var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

const port = process.env.PORT || 3001;

var app = express();


// catch 404 and forward to error handler
app.use(express.json()); // parses header requests (req.body)

app.set("json spaces", 2); // sets JSON spaces for clarity
require("dotenv/config");
app.use(cookieParser(process.env.SECRET));

// error handler


var indexRouter = require("./routes/index");
app.use("/index", indexRouter);

// Lyt til port 3001 ELLLER den dynamiske port fra hosten
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
