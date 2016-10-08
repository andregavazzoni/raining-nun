var express = require('express');
var MongoClient = require('mongodb');
var router = express.Router();
var db;

MongoClient.connect('mongodb://rainingnun:rainingnun@ds053196.mlab.com:53196/heroku_071h3v73', function (error, instance) {
    if (error) {
        console.log("Erro ao estabelecer uma coenxão com o BD:" + error);
    } else {
         this.db = instance;
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save-score', function (req, res, next) {
    name = req.body.name;
    score = req.body.score;
    this.db.collection("highscore")
        .insert([{"name": name, "score": score}]);
    res.header('Content-Type', 'application/json');
    res.json(JSON.stringify({ "success": true }));
});

router.get('/highscore', function (req, res, next) {
    this.db.collection("highscore")
        .find()
        .toArray(function (error, scores) {
            if (!error) {
                console.log(scores);
                res.header('Content-Type', 'application/json');
                res.json(scores);
            } else {
                res.status(500)
            }
        });
});

module.exports = router;
