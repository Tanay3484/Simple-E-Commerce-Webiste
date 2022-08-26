// let shopping_cart = [];

// $(document).ready(function () {
//     $("#cart").click(function () {
//         const productText = document.querySelector("#product-1-description").innerText;
//         const count = 1;
//         const product = {
//             "Name": productText,
//             "Count": count,
//         };
//         shopping_cart.push(product);
//         exports.re = product;
//     })
// })

const btn = document.querySelector("#cart");
const mongoose = require('mongoose');
btn.addEventListener('click', function () {
    const productText = document.querySelector("#product-1-description").innerText;
    const count = document.querySelector("#typeNumber").innerText;
    const product = {
        "Name": productText,
        "Quantity": count,
    };

    mongoose.connect('mongodb://localhost:27017/WebTechProject');
    var db = mongoose.connection;
    db.on('error', console.log.bind(console, "Connection Error"));
    db.once('open', function () {
        console.log("Successfuly connected")
    });

    db.collection('ShoppingCart').insertOne(product,function (err,collection){
        if(err)
        {
            throw(err)
        }
        console.log("Record inserted Successfuly")
    })

})
// const btn = document.querySelector("#cart");
// 

// function addCart() {
//     const productText = document.querySelector("#product-1-description").innerText;
//     const count = 1;
//     const product = {
//         "Name": productText,
//         "Count": count
//     };
//     cart.push(product);
//     const incrementor = document.
// }
// btn.addEventListener('click', addCart);