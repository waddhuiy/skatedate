var express    = require('express');
var conf       = require('app/config/conf');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

// schema imports
var User = require('app/models/user');

var app        = express();
var router     = express.Router();

app.set('port', conf.port);
mongoose.connect(conf.mongodburl);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
