var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: "nice API bro."});
});

module.exports = router;
