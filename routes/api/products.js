const express = require('express');

const router = express.Router();

// Get product model
const Product = require('../../models/Product');

// @router GET api/products
// @desc Gets ALL products in DB
// @access Public
router.get('/', (req, res) => {
    Product
        .find()
        .then(products => res.json(products));
});

// @router POST api/products
// @desc Create a product
// @access Public
router.post('/', (req, res) => {
    const { name, category, price, stocked } = req.body;
    const newProduct = new Product({ name, category, price });

    newProduct
        .save()
        .then(product => res.json(product));
});

module.exports = router;