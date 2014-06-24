var express = require('express');
var router = express.Router();

var groups = [{"content": "anabaptist", "value": 1520, "id": "anabaptist"}, {"content": "bogomil", "value": 1235, "id": "bogomil"}, {"content": "cabala", "value": 1530, "id": "cabala"}, {"content": "cathar", "value": 1140, "id": "cathar"}, {"content": "catholic", "value": 1140, "id": "catholic"}, {"content": "christian cabala", "value": 1490, "id": "christian cabala"}, {"content": "devotio moderna", "value": 1370, "id": "devotio moderna"}, {"content": "heretics", "value": 1140, "id": "heretics"}, {"content": "hermetic", "value": 1415, "id": "hermetic"}, {"content": "hussite", "value": 1410, "id": "hussite"}, {"content": "jesuit", "value": 1540, "id": "jesuit"}, {"content": "jews", "value": 1010, "id": "jews"}, {"content": "joachimites", "value": 1183, "id": "joachimites"}, {"content": "langue duree", "value": 1000, "id": "langue duree"}, {"content": "lollards", "value": 1377, "id": "lollards"}, {"content": "lutheran", "value": 1517, "id": "lutheran"}, {"content": "masonic", "value": 1590, "id": "masonic"}, {"content": "monastic reform", "value": 1110, "id": "monastic reform"}, {"content": "paterines", "value": 1057, "id": "paterines"}, {"content": "reform", "value": 1000, "id": "reform"}, {"content": "reformed", "value": 1516, "id": "reformed"}, {"content": "renaissance", "value": 1194, "id": "renaissance"}, {"content": "revolt", "value": 1358, "id": "revolt"}, {"content": "scholasticism", "value": 1100, "id": "scholasticism"}, {"content": "science", "value": 1543, "id": "science"}, {"content": "unitas fratrum", "value": 1500, "id": "unitas fratrum"}, {"content": "voluntary poverty", "value": 1084, "id": "voluntary poverty"}, {"content": "waldensians", "value": 1173, "id": "waldensians"}];


/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

var storydata = require('../model/story');

var mongoose = require( 'mongoose' );
Story = mongoose.model('Story');

/* GET users listing. */
router.get('/', function(req, res) {
console.log('in get');
  var strOutput;
  Story.find({}, function (err, stories) {
    console.log('in callback');
    if (err) {
     console.log(err);
    } 
    //console.log(JSON.stringify(stories));   
    console.log('data retrieved');
    res.render('users', { items: stories, groups: groups });
  });
});




module.exports = router;
