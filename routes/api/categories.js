/* eslint-disable linebreak-style */
const express = require('express');
const auth = require('../../middleware/auth');

const router = express.Router();

// Get product model
const Category = require('../../models/Category');

// @router GET api/categories
// @desc Gets ALL categories in DB
// @access Public
router.get('/', (req, res) => {
  Category
    .find()
    .then((categories) => res.json(categories));
});

// @router POST api/categories
// @desc Create a product
// @access Public
router.post('/', auth, (req, res) => {
  const { name } = req.body;
  const newCategory = new Category({ name });

  newCategory
    .save()
    .then((category) => res.json(category));
});

module.exports = router;
