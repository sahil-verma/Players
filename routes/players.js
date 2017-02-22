//express setup
let express = require('express');
let router = express.Router();

let players = require('../models/player');

/* players main page */
router.get('/', function(req, res, next){

    //use mongoose model to query for all books
    players.find(function (err, players) {
        if(err){
            console.log(err);
            res.end(err);
            return;
        }
        //no error so send the books to the index view
        res.render('players',{
            players:players 
         });
    });
});

// make this file public
module.exports = router;