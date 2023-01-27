// app.js
require("dotenv").config({path: "./config/config.env"})
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require("mongoose");
const auth = require("./middlewares/auth")
const morgan = require("morgan");
// routes
const students = require('./routes/api/students');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("tiny"));
// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/students', students);
app.use("/api/",require("./routes/auth"));
app.use("/api/",require("./routes/contact"));
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));