// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ---------- REMOVE FOR PRODUCTION!!! -----------
require('dotenv/config');

// GLOBALS
const app = express();
const port = 5000;

// MIDDLEWARES
app.use(cors()); // ---------- REMOVE FOR PRODUCTION!!! -----------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// IMPORT ROUTES
const workersRouter = require('./routes/workers');
const tasksRouter = require('./routes/tasks');
const stationsRouter = require('./routes/stations');

app.use('/workers', workersRouter);
// app.use('/tasks', tasksRouter);
// app.use('/stations', stationsRouter);

// ROUTES
app.get('/', (req, res) => {
	res.send("Home page");
})

mongoose.connect(process.env.DB_KEY, { useNewURLParser: true }, () => console.log("Connected to mongoose!"));

app.listen(port, () => console.log("Rotato API listening on port 5000!"));
