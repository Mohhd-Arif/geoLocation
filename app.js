const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 8000;
const routes = require('./api/v1/routes')

// app.use(bodyparser);
app.use('/api/v1',routes);
app.listen(port,()=>console.log("listenning on port "+port));
