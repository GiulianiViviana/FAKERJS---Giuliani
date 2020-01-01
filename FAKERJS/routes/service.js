var express = require('express');
var router = express.Router();
const poeti = require('../vettorePoeti');

router.get('/', function(req, res, next) {
  res.send('Service funziona, inserire nell url /informazioni se si vuole visualizzare tutto, /profilo?id=numero per il singolo poeta, /immagini per le immagini dei poeti');
});

router.get('/informazioni', function(req, res, next) {
  res.send(poeti);
});

router.get('/uno?id=',function(req,res,next) {
  res.send();
});

router.get('/immagini', function(req,res,next) {
    for(i=0; i<vettorePoeti.lenght;i++){
        res.send(vettorePoeti.image);
    }
});




module.exports = router;
