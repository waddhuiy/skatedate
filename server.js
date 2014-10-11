// requires
var express    = require('express');
var conf       = require('./app/config/conf.js');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

// schema requires
var User = require('./app/models/user.js');

var app    = express();
var router = express.Router();

app.set('port', conf.port);
mongoose.connect(conf.mongodburl);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

// do something everytime API gets a request
router.use(function(req, res, next) {
    // do anything you want here
    console.log('Received a request :)');

    // continue on
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
