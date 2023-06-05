const winston = require('winston');

module.exports = function(err,req,res,next){
  winston.error(err.message,{ metadata: err.stack});
  // winston.error(err.message,{ metadata: {
  //   message: err.message,
  //   name : "Error",   
  //   stack: err.stack
  // }});

  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send('Something failed.');
}                 