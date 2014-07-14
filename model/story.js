var mongoose = require( 'mongoose' );

var storySchema = new mongoose.Schema({
  start: Date,
  end: Date,
  country: String,
  group: String
});

var Story = module.exports = mongoose.model('Story', storySchema);

// exports.eventlist = function itemlist(gname,callback){
//  var Event = mongoose.model( 'Event' );
//  Event.find(function (err, events) {
//   if(err){
//    console.log(err);
//   }else{
//    console.log(events);
//    callback("",events);
//   }
//  })// end Event.find
// }// end exports.eventlist

//{'group':gname}, 