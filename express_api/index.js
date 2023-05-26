const debug = require('debug')('app: startup');
const config = require('config');
const morgan = require('morgan');
const helmet= require('helmet');
const Joi = require("joi");
const logger = require('./middleware/logger');
const courses = require('./Vidly/routes/courses');
const customers = require('./Vidly/routes/customers');

const home = require('./Vidly/routes/home');
const express = require('express'); 
const app = express();

app.set ('view engine','pug');
app.set('views','./view');

app.use(express.json());   //req.body
app.use(express.urlencoded({extended:true}));   //key=valuekey=value
app.use(express.static('public'));
app.use(helmet());
app.use('/api/coureses',courses);
app.use('/api/customers',customers);
app.use('/', home);

//configuration
console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
// console.log('Mail password:' + config.get('mail.password'));

if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  debug('morgan enabled...');
};

app.use(logger)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
