const Joi = require("joi");
const auth = require('../middleware/auth');
const admin = require("../middleware/admin");
const { Genre,validate,genreSchema } = require('../models/genre');
const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();

router.get('/',async (req,res) =>{
    throw new Error('Could not get the genres.');       
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.post('/', auth, async(req,res) => {

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({name : req.body.name}); 
    genre = await genre.save();
    res.send(genre);
});

router.put('/:id',async(req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const genre = await Genre.findByIdAndUpdate(req.params.id,{name: req.body.name},{
         new: true
        });

    if(!genre) res.status(404).send('The genres is not found in the code');

    res.send(genre);

});

router.delete('/:id', [auth,admin],async(req,res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if(!genre) res.status(404).send('The genre is not found in the code');

    res.send(genre);
});

router.get ('/:id',async (req,res) => {
    const genre = await Genre.findById(req.params.id);
    if(!genre) res.status(404).send('the genre is not found in the code');
    res.send(genre);
    if(genre == false) res.send(genre);
});

module.exports = router;