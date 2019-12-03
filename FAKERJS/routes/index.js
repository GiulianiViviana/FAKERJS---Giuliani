var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage Poeti',  content : 'Elenco di 10 poeti' });
});

module.exports = router;
