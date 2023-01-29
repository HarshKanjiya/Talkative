const http = require('http');
const socketIO = require('socket.io')
const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')
const app = express()
var passport = require("passport");

// configuration for dotenv and error handler
const errorMiddleWare = require("./middleware/error");
dotenv.config({ path: "./backend/config/config.env" });

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(cookieParser());
app.use(cors([]));

app.use(express.static("client/build"));
app.use(passport.initialize());
 
require("./config/passport");
// routes
const chat = require('./routes/chatRoute')
const user = require('./routes/userRoutes');


app.use('/api/v1',chat)
app.use('/api/v1',user)


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
