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
