'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

//Get all products
router.get('/', function (req, res, next) {
	Product.find()
	.then(function (product) {
		res.json(product);
	})
	.then(null, next)
});


//Get a product by ID
router.get('/:name', function (req, res, next){
	Product.find({name: req.params.name})
	.then(function (product) {
		if(!product) {
			var err = new Error('Product #' + req.params.id + ' not found');
			err.status = 404;
			throw err;
		} res.json(product);
	})
	.then(null, next)
})


module.exports = router;


