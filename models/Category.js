const mongoose = require('mongoose');

// Create product schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('category', CategorySchema);
module.exports = Category;