// //--------------------------1----------------------------------------)
// //----------------(export,requite,module)----------------------------)
// console.log(__filename);
// console.log(__dirname);
// var url = 'http://mylogger.io/log';
// function log(massage){
//   console.log(massage);
// }
// log('hello')
// module.exports = log;

//-----------------------(extending EventEmiter)---------------------
const EventEmitter = require('events');
var url = 'http://mylogger.io/log';
class Logger extends EventEmitter{
  log(massage){
  console.log(massage);

  this.emit('messageLogged',{id : '1', url : '://http'});

}};
module.exports = Logger;



















































































