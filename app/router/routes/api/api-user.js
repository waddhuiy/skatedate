var express = require('express');
var User    = require('./app/models/user.js');
var router  = express.Router();

router.route('/')

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
