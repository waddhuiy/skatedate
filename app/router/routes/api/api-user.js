var express = require('express');
var User    = require('./../../../models/user.js');
var router  = express.Router();



   router.post('/' ,function(req, res){
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

    router.get('/' ,function(req, res){
        // res.json({message: "Users be using."});
        User.find(function(err, users){
            if(err){res.send(err);}
            res.json(users);
        });
    });

module.exports = router;
