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

// //Create a new product
// router.post('/', function (req, res, next) {
// 	console.log("Hitting the right route :", req.body.data)
// 	User
// 	.create(req.body.data)
// 	.then(function (result) {
// 		res.status(201).json(result);
// 	})
// 	.then(null, next)
// })

//Get a product by ID
router.get('/:id', function (req, res, next){
	Product.findById(req.params.id)
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


