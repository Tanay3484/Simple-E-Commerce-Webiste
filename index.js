const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { match } = require("assert");
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

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

// var validateEmail = function(email){
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// }

// const userSchema = new mongoose.Schema({
//     Name:"String",
//     Email:{
//         type:"String",
//         trim:true,
//         lowercase:true,
//         unique:true,
//         required:"Email is required",
//         validate:[validateEmail,"Please fill in a valid email"],
//         match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
//     Password:"String",
// });



app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.get('/register',(req,res)=>{
    res.render('register.ejs');
})

app.get('/electronics',(req,res)=>{
    res.render('electronics.ejs');
})

app.get('/furniture',(req,res)=>{
    res.render('furniture.ejs');
})

app.get('/fashion',(req,res)=>{
    res.render('fashion.ejs');
})

app.get('/grocery',(req,res)=>{
    res.render('grocery.ejs');
})

app.get('/electronics/laptops',(req,res)=>{
    res.render('laptops.ejs');
})

app.get('/electronics/smartphones',(req,res)=>{
    res.render('smartphones.ejs');
})

app.get('/electronics/homeappliances',(req,res)=>{
    res.render('homeappliances.ejs');
})

app.get('/electronics/tv',(req,res)=>{
    res.render('tv.ejs');
})

app.get('/fashion/men',(req,res)=>{
    res.render('men.ejs');
})

app.get('/fashion/women',(req,res)=>{
    res.render('women.ejs');
})

app.get('/furniture/sofa',(req,res)=>{
    res.render('sofa.ejs');
})

app.get('/furniture/beds',(req,res)=>{
    res.render('beds.ejs');
})

app.get('/furniture/tables',(req,res)=>{
    res.render('tables.ejs');
})

app.get('/furniture/chairs',(req,res)=>{
    res.render('chairs.ejs');
})

app.get('/grocery/beverages',(req,res)=>{
    res.render('beverages.ejs');
})

app.get('/grocery/bread',(req,res)=>{
    res.render('bread.ejs');
})



const productSchema = new mongoose.Schema({
    Name:"String",
    Price:"Number",
    Qty:"Number",
    Size:"String"
})

var Product = mongoose.model("Product",productSchema);


app.post('/electronics/laptops', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;

    const Data = new Product({Name:name,Price:price,Qty:qty});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/electronics/laptops');
})

app.post('/electronics/smartphones', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:""});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/electronics/smartphones');
})

app.post('/electronics/homeappliances', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:""});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/electronics/homeappliances');
})

app.post('/electronics/tv', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:""});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/electronics/tv');
})

app.post('/fashion/men', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/fashion/men');
})

app.post('/fashion/women', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/fashion/women');
})

app.post('/furniture/sofa', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/furniture/sofa');
})

app.post('/furniture/beds', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/furniture/beds');
})

app.post('/furniture/tables', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/furniture/tables');
})

app.post('/furniture/chairs', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/furniture/chairs');
})

app.post('/grocery/beverages', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/grocery/beverages');
})

app.post('/grocery/bread', function (req, res) {
    var name = req.body.product_description;
    var price = req.body.product_price;
    var qty = req.body.Quantity_1;
    var size = req.body.size;

    const Data = new Product({Name:name,Price:price,Qty:qty,Size:size});
    Data.save()
        .then(data=>{
            console.log("IT WORKED")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        });
    return res.redirect('/grocery/bread');
})


app.listen(8080,()=>{
    console.log("Listening on port 8080");
})