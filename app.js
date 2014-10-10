var application_root = __dirname,
    express          = require("express"),
    path             = require("path"),
    mongoose         = require('mongoose');

var app = express();
var port = 3000;

app.get('/', function(req, res){
      res.send('Hello World!');
});

var server = app.listen(port, function() {
        console.log('Listening on port %d', server.address().port);
});

