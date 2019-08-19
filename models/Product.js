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
    },
    stocked: {
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;