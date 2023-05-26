const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index',{title: 'My Express App', message: 'HEllo'});
  })
  
module.exports = router;