// ====================================================
// EXPRESS
// ====================================================
var express    = require('express');
var app        = express();

// ====================================================
// APP CONFIG
// ====================================================
var conf       = require('./app/config/conf.js');
var bodyParser = require('body-parser');

app.set('port', conf.port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ====================================================
// MONGODB
// ====================================================
var mongoose   = require('mongoose');
mongoose.connect(conf.mongodburl);


// ====================================================
// ROUTING
// ====================================================
var router = require('./app/router')(app);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;


// ====================================================
// SERVER
// ====================================================
app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
