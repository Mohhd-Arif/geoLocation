const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 8000;
const routes = require('./api/v1/routes')
const path = require('path')

// app.set('view engine','ejs');
// app.set('views',path.join(__dirname, 'views'));

// app.use(bodyparser);
app.use('/api/v1',routes);
app.listen(port,()=>console.log("listenning on port "+port));
