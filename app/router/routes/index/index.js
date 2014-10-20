var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: "You seem to be at the project index there."});
});

module.exports = router;
