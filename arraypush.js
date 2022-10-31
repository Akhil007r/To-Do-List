//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
   var Today = new Date();
   var options ={
    weekday:'long',
    day:'numeric',
    month:'long',
    year:'numeric'
   }   
  var day = Today.toLocaleString("en-US",options)
  res.render('index',{kindOfDay : day, newListItem : items })

})
app.post("/",function(req,res){
 var item = req.body.newItem;
 items.push(item)
 res.redirect("/")
})
app.listen(4000)

