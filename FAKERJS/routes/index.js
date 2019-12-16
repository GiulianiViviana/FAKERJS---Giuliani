var express = require('express');
var router = express.Router();
const poeti = require('../vettorePoeti');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Homepage poeti', poeti:poeti});
});
module.exports = router;
