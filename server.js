var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");

const port = process.env.PORT || 3001;

var app = express();

app.use(express.json()); // parses header requests (req.body)

app.set("json spaces", 2); // sets JSON spaces for clarity
require("dotenv/config");
app.use(cookieParser(process.env.SECRET));

// Forbind til MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to MongoDB!");
    }
});

app.get("/", (req, res) => {
    res.json({ message: "We did it" }).status(200);
});

var indexRouter = require("./routes/index");
app.use("/index", indexRouter);

// Lyt til port 3001 ELLLER den dynamiske port fra hosten
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
