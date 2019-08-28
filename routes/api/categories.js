const express = require('express');

// Import authentication middleware
const auth = require('../../middleware/auth');

// Create router
const router = express.Router();

// Get category model
const Category = require('../../models/Category');

// @router GET api/categories
// @desc Gets ALL categories in database and returns as JSON object
// @access Public
router.get('/', (req, res) => {
  Category
    .find()
    .then((categories) => res.json(categories));
});

// @router POST api/categories
// @desc Create a product in the database and return it as a JSON object
// @access Private(authentication token required)
router.post('/', auth, (req, res) => {
  const { name } = req.body;
  const newCategory = new Category({ name });

  newCategory
    .save()
    .then((category) => res.json(category));
});

module.exports = router;
