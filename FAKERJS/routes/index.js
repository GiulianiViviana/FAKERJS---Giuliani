var express = require('express');
var router = express.Router();
let poeti = new Array();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Homepage Poeti");
});
module.exports = router;
