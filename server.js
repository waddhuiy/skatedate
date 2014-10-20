// ====================================================
// EXPRESS
// ====================================================
var express    = require('express');
var app        = express();
var router     = express.Router();

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
var User       = require('./app/models/user.js');

mongoose.connect(conf.mongodburl);


// ====================================================
// ROUTING
// ====================================================

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
// SERVER
// ====================================================
app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
