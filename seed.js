const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/shopez");

const data = [
    {
        name: "iPhone",
        price: 80000,
        image: "https://via.placeholder.com/150",
        category: "Mobiles"
    },
    {
        name: "T-shirt",
        price: 500,
        image: "https://via.placeholder.com/150",
        category: "Fashion"
    }
];

Product.insertMany(data)
.then(() => console.log("Data added"));