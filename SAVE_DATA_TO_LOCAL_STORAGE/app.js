//jshint eversion:6
// const db=require('./config/mongoose');
// const table = require('./models/fruit');
// const express = require("express") ;
// const path = require('path');
// const app = express() ;
// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))
//
// const fs = require('fs');
//   app.listen(3000,()=>{
//     console.log("on port 3000")
//   })
//
// app.get('/',(req,res)=>{
//
//   return res.render('index');
//
// })
//
// app.post('/insert',(req,res)=>{
//
//  table.insertMany({name:req.body.fruit, cost:req.body.cost}) ;
//  // console.log(db.models);
//
//  res.redirect('/');
//
//
// })

// Fruit.create({name:'apple',cost:'56'});


// const mongoose = require('mongoose') ;
// mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB") ;
//
// const fruitSchema = new mongoose.Schema({
//   name:String ,
//   rating:String,
//   review:String
// })
//
// const Fruit = mongoose.model('Fruit' , fruitSchema) ;
//
// const fruit = new Fruit({
//   name : "Apple" ,
//   rating : 7 ,
//   review : "super bro"
// });
//
// fruit.save() ;


const express = require("express") ;
const app = express() ;
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
const fs = require('fs');
const mongoose = require("mongoose") ;
mongoose.connect("mongodb://0.0.0.0:27017/peopleDB") ;

const peopleSchema = new mongoose.Schema({
  name : String ,
  age : String ,
  address : String
});

const People = mongoose.model('People',peopleSchema) ;

app.get('/',(req,res)=>{
    return res.render("index") ;
});

app.post('/insert',(req,res)=>{
  const p = new People({
    name : req.body.name ,
    age : req.body.age ,
    address : req.body.address
  });

  p.save() ;
    res.redirect('/') ;
});

app.listen(3000,listen=>{
  console.log("working on the port 3000") ;
});
