var express = require('express');
var router = express.Router();



var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/stories';

mongoose.connect(mongoUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  //console.log('yay!');
  var kittySchema = mongoose.Schema({
      name: String
  })
  var Kitten = mongoose.model('Kitten', kittySchema)
  var silence = new Kitten({ name: 'Silence' })
  console.log(silence.name) // 'Silence'
  
  // kittySchema.methods.speak = function () {
  //    var greeting = this.name
  //      ? "Meow name is " + this.name
  //      : "I don't have a name"
  //    console.log(greeting);
  //  }
  // 
  //  var Kitten = mongoose.model('Kitten', kittySchema)
  //  
  //  var fluffy = new Kitten({ name: 'fluffy' });
  //fluffy.speak() // "Meow name is fluffy"
});


router.get('/', function(req, res) {
  res.render('mongoose', { title: 'Mongoose' });
});

module.exports = router;