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
    const newProduct = new Product({ name, category, price, stocked });

    newProduct
        .save()
        .then(product => res.json(product));
});

// @router DELETE api/products
// @desc Delete the product with the given id
// @access Public
router.delete('/', (req, res) => {
    const { id } = req.body;
    console.log(id);

    Product
        .findOneAndDelete({"_id": id})
        .then(deletedProduct => res.json(deletedProduct));
});

module.exports = router;