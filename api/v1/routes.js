const express = require('express');
const route = express.Router();
const bodyparser = require('body-parser');


// route.use(bodyparser.json());
route.get('/hey',(req,res)=>{
  console.log("hello");
  res.send('hey').status(200);
});

module.exports = route;
