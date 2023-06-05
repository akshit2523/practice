const { Rental, validate } = require("../models/rental");
const { Movie } = require("../models/movie");
const { Customer } = require("../models/customer");
const mongoose = require("mongoose");
const Fawn = require("fawn");
const express = require('express');
const router = express.Router();

Fawn.init("mongodb://localhost/vidly");

router.get("/", async (req, res) => {
  const rentals = await Rental.find().sort("-dateOut");
  res.send(rentals);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.default[0].message);

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(400).send("Invalid customer.");

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send("Invalid movie.");

  if (movie.numberInStock == 0)
    return res.status(400).send("Movie not in stock.");

  let rental = new Rental({
    customer: {
      _id: customer._Id,
      name: customer.name,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate
    }
  });
  // try {
  //   new Fawn.Task()
  //     .save("rentals", rental)
  //     .update("movies",{ _id: movie._id },{
  //         $inc: { numberInStock: -2 }
  //       })
  //     .run();

  //     res.send(rental);
  // } catch(ex) {
  //   res.status(500).send("Something failed.");
  // }

  try {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
      const result = await rental.save();
      movie.numberInStock--;
      movie.save();
      res.send(result);
    });

    session.endSession();
    console.log('success');
  } catch (error) {
    console.log('error', error.message);
  }
});

router.get("/:id", async (req, res) => {
  const rental = await Rental.findById(req.params.id);

  if (!rental)
    return res.status(400).send("The rental with the given id is not available");

  res.send(rental);
});

module.exports = router;
