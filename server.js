const express = require("express")
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs')
app.get("/",function(req,res){
    var today= new Date();
    var currentDay = today.getDay();
    var day ="";
    if(currentDay===6||currentDay === 0){
        day ="weekend";
        res.render("index",{kindOfDay : day})
    }
    else{
        day ="Weekday"
        res.render("index",{kindOfDay:day})
    }
})
 app.listen(4000,function(){
    console.log("server is running at location 4000")
 })