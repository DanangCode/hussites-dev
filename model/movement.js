var mongoose = require( 'mongoose' );

var movementSchema = new mongoose.Schema({
  content: String,
  value: Number,
  id: String
});

// exports.movmentlist = function movementlist(gname,callback){
//  var Movement = mongoose.model( 'Movement' );
//  Movement.find({function (err, movement) {
//   if(err){
//    console.log(err);
//   }else{
//    console.log(movements);
//    callback("",movements);
//   }
//  })// end movements.find
// }// end exports.movementslist