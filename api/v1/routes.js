const express = require('express');
const route = express.Router();
const bodyparser = require('body-parser');
// route.set("view engine","html");


// route.use(bodyparser.json());
route.get('/hey',(req,res)=>{
  console.log("hello");
  res.send('hey').status(200);
});

route.get('/map',(req,res)=>{
  res.render('index.ejs');
});

module.exports = route;
