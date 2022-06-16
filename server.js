var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const http = require('http')

var app = express();

const server = http.createServer(app)
const socketIO = require('socket.io');
const io = new socketIO.Server(server, {
    path: '/socket'
})

app.use(express.json()); // parses header requests (req.body)
app.use(methodOverride("_method"));
app.set("json spaces", 2); // sets JSON spaces for clarity
require("dotenv/config");
require('dotenv-flow').config();

const port = process.env.PORT || 3001;

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

io.of("/chatSocket").on('connection', (socket) => {
    console.log(`${socket.id} connected to the socket.`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected from the socket.`);
    })
    socket.on('chatmessage sent', () => {
        socket.broadcast.emit("new chatmessage");
        socket.emit("new chatmessage");
    })
    socket.on('date', () => {
        socket.emit('date', new Date());
    })
})

app.use((req, res, next) => {
    req.io = io;
    return next();
})

var indexRouter = require("./routes/index");
app.use("/api/index", indexRouter);

var userRouter = require("./routes/user");
app.use("/api/user", userRouter);

var chatRouter = require("./routes/chat");
app.use("/api/chat", chatRouter)

// Forbind til MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(process.env.DB_CONNECTION_STRING)
        throw err;
    } else {
        console.log("Connected to MongoDB!");
    }
});

// Lyt til port 3001 ELLLER den dynamiske port fra hosten
server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
