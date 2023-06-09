const mongoose = require('mongoose');
const {genreSchema} = require('./genre');
const Joi = require('joi');

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre : {
        type: genreSchema,
        require: true,
    },
    numberInStock : {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 255,
    },
    dailyRentalRate : {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 255, 
    }
}))

function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(255).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    })
    return schema.validate(movie);       
}

exports.Movie = Movie;
exports.validate = validateMovie;