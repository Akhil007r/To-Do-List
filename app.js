// jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname +"/date.js")
const app = express();
let items = [];
let workItems =[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.get("/", function (req, res) {
   let day = date.getDate();
    res.render('index', { listTitle: day, newListItem: items });

})
app.post("/", function (req, res) {
    let item = req.body.newItem;
    console.log(req.body)
    console.log(req.body.list)

    if(req.body.list ==="WORK")
    {
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/")
    }
    
})


// work
app.get("/work",function(req,res){
    res.render("index",{listTitle:"WORK ITEMS", newListItem : workItems});
})
app.get("/about",function(req,res){
    res.render("about")
})
app.listen(3000, function () {
    console.log("Server started at location 3000")
})
    // var currentDay = today.getDay();
    // var day="";
    // switch (currentDay) {
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day= "Monday";
    //         break;
    //     case 2:
    //         day= "Tuesday";
    //         break;
    //     case 3:
    //         day= "Wednesday";
    //         break;
    //     case 4:
    //         day= "Thursday";
    //         break;
    //     case 5:
    //         day= "Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default:
    //         console.log("The current day is "+currentDay+"its not valid")
    //         break;
    // }