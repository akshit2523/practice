const mongoose = require('mongoose');
const Joi = require('Joi');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 5,
        maxlength: 50
    }
});

const Genre = mongoose.model('Genre',genreSchema);

function validateGenre(genre){
    const schema = Joi.object({
        name: Joi.string().min(5).required()
    })
    return schema.validate(genre)
};

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
