const mongoose = require('mongoose');

// Create product schema
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;