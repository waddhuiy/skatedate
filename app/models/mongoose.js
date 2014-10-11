var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var UserSchema = new Schema({
    firstname: String,
    lastname:  String,
    age:        Number,
    email:      String,
    number:     Number,
    city:       String,
    fburl:      String
});

module.exports = mongoose.model('User', UserSchema);
