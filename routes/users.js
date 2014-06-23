var express = require('express');
var router = express.Router();

//var storydata = require('../model/story');

var mongoose = require( 'mongoose' );
//Story = mongoose.model('Story');

//exports.index = function (req, res) {
  // Story.create({
  //    content : "England",
  //    group: "D",
  //    start: '1500-01-01',
  //    end: null
  //  }, function(err, story) {
  //    var strOutput;
  //    if (err) {
  //      console.log(err);
  //      strOutput = 'Oh dear, we\'ve got an error';
  //    } else {
  //      console.log('Story created: ' + story);
  //      strOutput = story.Country + ' created in Group ' + story.group + '\n';
  //    }
  //    console.log(strOutput);
  //  });
//};

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
