const mongoose = require('mongoose');

// Create category schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('category', CategorySchema);
module.exports = Category;