var express = require('express');
var router = express.Router();
let poeti = new Array();
const fs = require('fs');
var faker = require('faker');
/* GET home page. */
router.get('/', function(req, res, next) {
    for (let i = 0; i<10; i++){
         poeti.push(createFakePerson());
    }
  let data = JSON.stringify(poeti);
  fs.writeFileSync('vettorePoeti.json',data);
  res.send(poeti);
});

function createFakePerson()
{
 let randomName = faker.name.findName(); // Rowan Nikolaus
 let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
 let randomCard = faker.helpers.createCard(); // random contact card containing many properties
 let randomImage = faker.image.people();

 let person = {
   name:randomName,
   email:randomEmail,
   card: randomCard,
   image: randomImage
 } 
 return person;
}
module.exports = router;
