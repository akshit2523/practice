const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movie = require('./routes/movies');
const rental = require('./routes/rentals');
const express = require('express');
// const { Router } = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
.then(() => console.log('Connected to MongoDB...'))
.catch(() => console.log('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/customers',customers);
app.use('/api/movies',movie);
app.use('/api/rentals',rental)

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));













