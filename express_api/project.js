const Joi = require("joi");
const express = require("express");
const app = express();
// const { indexOf } = require('underscore');
app.use(express.json());

const genres = [
    {id : 1, name : "Action"},
    {id : 2, name : "Horror"},
    {id : 3, name : "Romance"},
];

app.get('/', (req,res) => {
    res.send('hello wolrd');
})
app.get('/api/genres',(req,res) =>{
    res.send(genres);
})

app.post('/api/genres/:id',(req,res) => {
    const{error} = validateGenre(req.body);
    if(error){
        return res.status(400).send(error.details[0].massage);
    };
    const genre = {
        id : genres.length + 1,
        name : req.body.name,  
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id',(req,res) => {
const genre = genres.find((g) => g.id === parseInt(req.params.id));
if(!genre) res.status(404).send('The genres is not found in the code');

const {error} = validateGenre(req.body);
if(error){
    return res.status(400).send(error.details[0].message)
}

genre.name = req.body.name;
// console.log(genres);
res.send(genre);

});
function validateGenre(genre){
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    });
    return schema.validate(genre);
};

app.delete('/api/genres/:id',(req,res) => {
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('The genre is not found in the code');

    const index = genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genre);
});

app.get ('/api/genres/:id', (req,res) => {
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('the genre is not found in the code');
    res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));













