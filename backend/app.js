const http = require('http');
const socketIO = require('socket.io')
const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var passport = require("passport");
const session = require("express-session")

// configuration for dotenv and error handler
const errorMiddleWare = require("./middleware/error");
dotenv.config({ path: "./backend/config/config.env" });

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    session({
        secret: "qazxswedcvfrtgbnhyujmkilop",
        resave: true,
        saveUninitialized: true,
        maxAge: 24 * 60 * 60 * 1000
    })
)
app.use(passport.initialize());
app.use(passport.session())

// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
app.use(cors({
    origin: [],
    withCredentials: true
}));


// app.use(express.static("client/build"));



// routes
const chat = require('./routes/chatRoute')
const user = require('./routes/userRoutes');

const auth = require('./routes/authRoutes')

app.use('/api/v1', chat)
app.use('/api/v1', user)
app.use('/auth', auth)

// deployment
// app.use(express.static(path.join(__dirname, "../frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });

// middleware for error
app.use(errorMiddleWare);

const server = http.createServer(app)

const io = socketIO(server)


module.exports = server;
