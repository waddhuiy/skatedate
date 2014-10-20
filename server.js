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
var User       = require('./app/models/user.js');

mongoose.connect(conf.mongodburl);


// ====================================================
// ROUTING
// ====================================================
var router = require('./app/router')(app);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

// router.route('/user')
//     .post(function(req, res){
//         var user = new User();

//         // @todo - grab from url
//         // dummy insertion for testing 
//         user.firstname = "luke";
//         user.lastname = "murphy";

//         user.save(function(err){
//             if(err){res.send(err);}
//             res.json({message: 'User created!'});
//         });
//     })
//     .get(function(req, res){
//         User.find(function(err, users){
//             if(err){res.send(err);}
//             res.json(users);
//         });
//     });


// ====================================================
// SERVER
// ====================================================
app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
