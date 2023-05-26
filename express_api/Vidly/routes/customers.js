const Joi = require("joi");
const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const {Customer,validate} = require('../models/customer')

router.get('/',async (req,res) =>{
    const customers = await Customer.find().sort('name');
    res.send(customers);
})

router.post('/', async(req,res) => {
    const {error} = validate(req.body);
    console.log(error)
    if(error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name : req.body.name,
        phone : req.body.phone,
        isGold : req.body.isGold
    }); 
    customer = await customer.save();
    res.send(customer);
});


router.put('/:id',async(req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const customer = await Customer.finByIdAndUpdate(req.params.id,
        {
        name: req.body.name,
        phone : req.body.phone,
        isGold : req.body.isGold
        },{ new: true });

    if(!customer) res.status(404).send('The customer is not found in the code');

    res.send(customer);

});

router.delete('/:id',async(req,res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if(!customer) res.status(404).send('The genre is not found in the code');

    res.send(customer);
});

router.get ('/:id',async (req,res) => {
    const customer = await Customer.findById(req.params.id);
    if(!customer) res.status(404).send('the genre is not found in the code');
    res.send(customer);
});

module.exports = router;