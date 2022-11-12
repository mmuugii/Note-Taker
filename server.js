// Muugii Munkhbold 11/12/2022
// Base JS file for Module 11 Homework. We are provided with the Public folder and the folder structure for this challenge.
// Began by installing all of the necessary NPM packages for this application to work. 
// imported in express and set up the PORT via Module 11 in class activities.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const api = require('./routes/api/api');
const html = require('./routes/html/html');

// middleware for parsing data (ie. json format)
// sets up Express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/', html);
app.use('/api', api);


app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}! Broncos Country, Let's ride!`);
});