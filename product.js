// Example using Mongoose
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    oldPrice: Number,
    image: String,
    category: String,
    description: String
});

module.exports = mongoose.model('Product', productSchema);