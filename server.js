// Import express
const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const path = require('path');
// require('dotenv').config();

// Initialize the app
const app = express();

// Middleware for bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importing the routes
const event = require('./routes/event');



// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/restfulApi', { useNewUrlParser: true});
const db = mongoose.connection;

// Added check for DB connection
if(!db)
console.log("Error connecting db")
else
console.log("Db connected successfully")

// Send message for default URL or Index route
app.get('/', (req, res) => {
	res.send('Welcome to Homepage');
});

 
// Use Api routes in the App
app.use('/api', event);

// Setup server port
const port = process.env.PORT || 5050;

// Launch app to listen to specified port
app.listen(port, () => {
	//  console.log("Running RestHub on port " + port);
	console.log(`Running RestHub on port ${port}`);
});
