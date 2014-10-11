// ====================================================
// EXPRESS
// ====================================================
var express    = require('express');
var app        = express();

// ====================================================
// APP CONFIG
// ====================================================
// requires configuration data such as port numbers,
// mongodb urls etc etc.
var conf       = require('./app/config/conf.js');
app.set('port', conf.port);

// body-parser
// @todo - what is this doing exactly?
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ====================================================
// MONGODB
// ====================================================
var mongoose   = require('mongoose');
mongoose.connect(conf.mongodburl);

// schema requires
var User       = require('./app/models/user.js');


// ====================================================
// ROUTING
// ====================================================
var router = express.Router();

// setup default prefix for API
app.use('/api', router);

// test our API at localhost:port/api
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// a test route to check out user stuff
router.route('/user')
    .post(function(req, res){
        var user = new User();

        // @todo - grab from url
        // dummy insertion for testing 
        user.firstname = "luke";
        user.lastname = "murphy";

        user.save(function(err){
            if(err){res.send(err);}
            res.json({message: 'User created!'});
        });
    })
    .get(function(req, res){
        User.find(function(err, users){
            if(err){res.send(err);}
            res.json(users);
        });
    });


// ====================================================
// MIDDLEWARE
// ====================================================
// do something everytime API gets a request
router.use(function(req, res, next) {
    // do anything you want here
    console.log('Received a request :)');

    // continue on
    next();
});


// ====================================================
// SERVER
// ====================================================
// kick off server
app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
