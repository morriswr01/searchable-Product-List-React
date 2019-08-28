const express = require('express');
const auth = require('../../middleware/auth')

const router = express.Router();

// Get product model
const Product = require('../../models/Product');

// @router GET api/products
// @desc Gets ALL products in DB and return as JSON object
// @access Private(authentication token required)
router.get('/', auth, (req, res) => {
    Product
        .find()
        .then(products => res.json(products));
});

// @router POST api/products
// @desc Create a product in DB and return as JSON object
// @access Private(authentication token required)
router.post('/', auth, (req, res) => {
    const { name, category, price, stocked } = req.body;
    const newProduct = new Product({ name, category, price, stocked });

    newProduct
        .save()
        .then(product => res.json(product));
});

// @router DELETE api/products
// @desc Delete the product with the given id and return deleted product as JSON object
// @access Private(authentication token required)
router.delete('/', auth, (req, res) => {
    const { id } = req.body;
    Product
        .findOneAndDelete({"_id": id})
        .then(deletedProduct => res.json(deletedProduct));
});

module.exports = router;