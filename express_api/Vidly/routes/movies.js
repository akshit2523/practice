const {Genre} = require('../models/genre');
const {Movie,validate} = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies);
})

router.post('/', async (req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre.');

    let movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();
    res.send(movie);
})


router.put('/:id',async(req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre.');

      
    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        },{ new: true });

    if(!movie) res.status(404).send('The movie is not found in the code');

    res.send(movie);

});

router.delete('/:id',async(req,res) => {
    const genre = await Movie.findByIdAndRemove(req.params.id);
    if(!genre) res.status(404).send('The genre is not found in the code');

    res.send(genre);
});

router.get ('/:id',async (req,res) => {
    const genre = await Movie.findById(req.params.id);
    if(!genre) res.status(404).send('the genre is not found in the code');
    res.send(genre);
});

module.exports = router;


