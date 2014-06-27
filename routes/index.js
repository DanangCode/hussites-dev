var express = require('express');
var router = express.Router();

var groups = [{"content": "anabaptist", "begin": "1520-01-01", "end": "1536-01-01", "id": "anabaptist"}, {"content": "bogomil", "begin": "1235-01-01", "end": "1235-01-01", "id": "bogomil"}, {"content": "cabala", "begin": "1530-01-01", "end": "1593-01-01", "id": "cabala"}, {"content": "cathar", "begin": "1140-01-01", "end": "1208-01-01", "id": "cathar"}, {"content": "catholic", "begin": "1140-01-01", "end": "1387-01-01", "id": "catholic"}, {"content": "christian cabala", "begin": "1490-01-01", "end": "1492-01-01", "id": "christian cabala"}, {"content": "devotio moderna", "begin": "1370-01-01", "end": "1370-01-01", "id": "devotio moderna"}, {"content": "heretics", "begin": "1140-01-01", "end": "1329-01-01", "id": "heretics"}, {"content": "hermetic", "begin": "1415-01-01", "end": "1576-01-01", "id": "hermetic"}, {"content": "hussite", "begin": "1410-01-01", "end": "1490-01-01", "id": "hussite"}, {"content": "jesuit", "begin": "1540-01-01", "end": "1566-01-01", "id": "jesuit"}, {"content": "jews", "begin": "1010-01-01", "end": "1348-01-01", "id": "jews"}, {"content": "joachimites", "begin": "1183-01-01", "end": "1323-01-01", "id": "joachimites"}, {"content": "langue duree", "begin": "1000-01-01", "end": "1000-01-01", "id": "langue duree"}, {"content": "lollards", "begin": "1377-01-01", "end": "1413-01-01", "id": "lollards"}, {"content": "lutheran", "begin": "1517-01-01", "end": "1522-01-01", "id": "lutheran"}, {"content": "masonic", "begin": "1590-01-01", "end": "1590-01-01", "id": "masonic"}, {"content": "monastic reform", "begin": "1110-01-01", "end": "1120-01-01", "id": "monastic reform"}, {"content": "paterines", "begin": "1057-01-01", "end": "1170-01-01", "id": "paterines"}, {"content": "reform", "begin": "1000-01-01", "end": "1356-01-01", "id": "reform"}, {"content": "reformed", "begin": "1516-01-01", "end": "1590-01-01", "id": "reformed"}, {"content": "renaissance", "begin": "1194-01-01", "end": "1348-01-01", "id": "renaissance"}, {"content": "revolt", "begin": "1358-01-01", "end": "1358-01-01", "id": "revolt"}, {"content": "scholasticism", "begin": "1100-01-01", "end": "1277-01-01", "id": "scholasticism"}, {"content": "science", "begin": "1543-01-01", "end": "1591-01-01", "id": "science"}, {"content": "unitas fratrum", "begin": "1500-01-01", "end": "1569-01-01", "id": "unitas fratrum"}, {"content": "voluntary poverty", "begin": "1084-01-01", "end": "1099-01-01", "id": "voluntary poverty"}, {"content": "waldensians", "begin": "1173-01-01", "end": "1184-01-01", "id": "waldensians"}];



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
    res.render('index', { items: stories, groups: groups });
  });
});




module.exports = router;
