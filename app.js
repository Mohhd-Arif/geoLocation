const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 8000;


app.use(bodyparser)
app.listen(port,()=>console.log("listenning on port "+port));
