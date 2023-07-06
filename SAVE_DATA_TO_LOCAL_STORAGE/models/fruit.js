// const mongoose = require('mongoose')
// const x = new mongoose.Schema({
//
//   name:{
//       type:String
//
//   }
//   ,
//   cost:{
//     type:String
//   }
//
//
// });
//
// const Fruit = mongoose.model('Fruit',x);
//
// module.exports = Fruit;


const mongoose = require('mongoose') ;
const fruitSchema = new mongoose.Schema({
  name:String ,
  rating:String,
  review:String
})

const Fruit = mongoose.model('Fruit' , fruitSchema) ;

module.exports = Fruit ; 
