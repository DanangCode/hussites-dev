var express = require('express');
var router = express.Router();

console.log('in users');
var storydata = require('../model/story');

var mongoose = require( 'mongoose' );
Story = mongoose.model('Story');

//exports.index = function (req, res) {
console.log('model created');
 
//};

/* GET users listing. */
router.get('/', function(req, res) {
console.log('in get');
  var strOutput;
  Story.find({}, function (err, story) {
    console.log('in callback');
    if (err) {
     console.log(err);
     strOutput = 'Oh dear, we\'ve got an error';
    } else {
     console.log(story);
     strOutput = story.country + ' created in Group ' + story.group + '\n';
    }    
  });
  // Story.create({
  //      content : "England",
  //      group: "D",
  //      start: '1500-01-01',
  //      end: null
  //    }, function(err, story) {
  //      console.log('in callback');
  //      if (err) {
  //        console.log(err);
  //        strOutput = 'Oh dear, we\'ve got an error';
  //      } else {
  //        console.log('Story created: ' + story);
  //        strOutput = story.Country + ' created in Group ' + story.group + '\n';
  //      }
  //      console.log(strOutput);
  //      
  //    });
  res.send('respond with a resource : '+ strOutput);
 
});

module.exports = router;
