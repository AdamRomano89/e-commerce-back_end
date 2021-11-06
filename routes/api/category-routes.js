const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async function (req, res) {
  try {
     // find all categories by Querying from Database and put the data into categories constant
    const categories = await Category.findAll();
    // then what ?
    res.json({
      message: "success",
      data: categories
    })
  } catch (error) {
    // what's about Errors
    res.status(500).json({err: error.message});
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
