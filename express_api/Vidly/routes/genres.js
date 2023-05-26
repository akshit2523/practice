const Joi = require("joi");
const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const { Genre,validate,genreSchema } = require('../models/genre')

router.get('/',async (req,res) =>{
    const genres = await Genre.find().sort('name');
    res.send(genres);
})

router.post('/', async(req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].massage);

    let genre = new Genre({name : req.body.name}); 
    genre = await genre.save();
    res.send(genre);
});

router.put('/:id',async(req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const genre = await Genre.finByIdAndUpdate(req.params.id,{name: req.body.name},{
         new: true
        });

    if(!genre) res.status(404).send('The genres is not found in the code');

    res.send(genre);

});

router.delete('/:id',async(req,res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if(!genre) res.status(404).send('The genre is not found in the code');

    res.send(genre);
});

router.get ('/:id',async (req,res) => {
    const genre = await Genre.findById(req.params.id);
    if(!genre) res.status(404).send('the genre is not found in the code');
    res.send(genre);
});

module.exports = router;