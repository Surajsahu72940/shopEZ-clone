const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product");
const path = require("path");
const User = require("./models/User");

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/shopez")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

// Route
app.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.render("index", { products });
    } catch (err) {
        console.log(err);
        res.send("Error loading products");
    }
});
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.render("products", { products });
});
app.use(express.urlencoded({ extended: true }));


app.post("/add-to-cart/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    cart.push(product);
    res.redirect("/cart");
});

app.get("/cart", (req, res) => {
    res.render("cart", { cart });
});

app.post("/remove/:index", (req, res) => {
    cart.splice(req.params.index, 1);
    res.redirect("/cart");
});

app.get('/', async (req, res) => {
    const allProducts = await Product.find({}); // Fetching from DB
    res.render('index', { allProducts }); // Sending 'allProducts' to the EJS file
});

let cart = [];
app.post("/add-to-cart/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    cart.push(product);
    res.redirect("/cart");
});

app.post("/buy/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("buy", { product });
});

app.get("/cart", (req, res) => {
    res.render("cart", { cart });
});

app.use(express.urlencoded({ extended: true }));
app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({
        username,
        email,
        password
    });

    await newUser.save();

    res.send("User Registered Successfully ✅");
});


app.post("/add-to-cart/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    cart.push(product);
    res.redirect("/cart");
});
app.get("/cart", (req, res) => {
    res.render("cart", { cart });
});
app.post("/remove/:index", (req, res) => {
    cart.splice(req.params.index, 1);
    res.redirect("/cart");
});


// Server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});