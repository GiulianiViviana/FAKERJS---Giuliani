
var express = require('express');
var router = express.Router();
var faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send(createFakePerson());
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
