var express = require('express');
var router = express.Router();

const axios=require('axios');

// categories
router.get('/category', function(req, res, next) {

  axios.get('https://dummyjson.com/products/categories')
  .then((response)=>{
    res.render('category', { pposts: response.data});
  }).catch((err)=>{
    console.log("opps ther is no data")
  })
});


router.get('/category/query', async (req, res, next) => {
  try {
    const catoid = req.params[index];
    let response = await axios.get(
      `https://dummyjson.com/products/categories/${catoid}`
    );

    res.render('single_category', {
      single_category: response.data,
    });
  } catch (err) {
    console.log(err);
    res.send('opps ther is no data')
  }
});


module.exports = router;
