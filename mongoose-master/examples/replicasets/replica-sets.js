
// import async to make control flow simplier
'use strict';

const async = require('async');

// import the rest of the normal stuff
const mongoose = require('../../lib');

require('./person.js')();

const Person = mongoose.model('Person');

// define some dummy data
const data = [
  {
    name: 'bill',
    age: 25,
    birthday: new Date().setFullYear((new Date().getFullYear() - 25))
  },
  {
    name: 'mary',
    age: 30,
    birthday: new Date().setFullYear((new Date().getFullYear() - 30))
  },
  {
    name: 'bob',
    age: 21,
    birthday: new Date().setFullYear((new Date().getFullYear() - 21))
  },
  {
    name: 'lilly',
    age: 26,
    birthday: new Date().setFullYear((new Date().getFullYear() - 26))
  },
  {
    name: 'alucard',
    age: 1000,
    birthday: new Date().setFullYear((new Date().getFullYear() - 1000))
  }
];


// to connect to a replica set, pass in the comma delimited uri and optionally
// any connection options such as the rs_name.
const opts = {
  replSet: { rs_name: 'rs0' }
};
mongoose.connect('mongodb://127.0.0.1:27018/persons,127.0.0.1:27019,127.0.0.1:27020', opts, function(err) {
  if (err) throw err;

  // create all of the dummy people
  async.each(data, function(item, cb) {
    Person.create(item, cb);
  }, function(err) {
    if (err) {
      // handle error
    }

    // create and delete some data
    const prom = Person.find({ age: { $lt: 1000 } }).exec();

    prom.then(function(people) {
      console.log('young people: %s', people);
    }).then(cleanup);
  });
});

function cleanup() {
  Person.remove(function() {
    mongoose.disconnect();
  });
}
