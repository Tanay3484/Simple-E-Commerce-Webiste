const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/WebTechProject');
var db = mongoose.connection;
db.on('error',console.log.bind(console,"Connection Error"));
db.once('open',function(){
    console.log("Successfuly connected")
});

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const userSchema = new mongoose.Schema({
    Name:"String",
    Email:"String",
    Password:"String",
});

var User = mongoose.model("User",userSchema);

app.post('/',function(req,res){
    var email = req.body.email;
    var passwd = req.body.passwd;
    if(email in db.getCollectionNames())
    {
        res.redirect('localhost:8080/home')
    }
})

app.listen(8080);