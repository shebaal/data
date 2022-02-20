// const { default: axios } = require('axios');
const { response } = require('express');
var express = require('express');
var router = express.Router();
const axios=require('axios');

const { check, validationResult }
	= require('express-validator');
  
const bodyparser = require('body-parser')


router.get('/', async (req, res, next) => {
  try {
    res.render('index', {
      // pposts: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
});


router.post('/saveData', [
	check('email', 'Email length should be 10 to 30 characters')
					.isEmail().isLength({ min: 10, max: 30 }),
	check('name', 'Name length should be 10 to 20 characters')
					.isLength({ min: 10, max: 20 }),
	check('mobile', 'Mobile number should contains 10 digits')
					.isLength({ min: 10, max: 10 }),
	check('password', 'Password length should be 8 to 10 characters')
					.isLength({ min: 8, max: 10 })
], (req, res) => {

	// validationResult function checks whether
	// any occurs or not and return an object
	const errors = validationResult(req);

	// If some error occurs, then this
	// block of code will run
	if (!errors.isEmpty()) {
		res.json(errors)
	}

	// If no error occurs, then this
	// block of code will run
	else {
		res.send("Successfully validated")
	}

});








module.exports = router;
 