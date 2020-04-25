var express = require('express');
var pController = require('./controllers/pController.js');


var app = express();
app.set('view engine','ejs');
app.use('/assets', express.static('assets'));

pController(app);
var port = process.env.PORT || 8080;

app.listen(port);