var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/save-score', function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.json(JSON.stringify({ "success": true }));
});

module.exports = router;
