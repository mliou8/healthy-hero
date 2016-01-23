'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

//Get all users
router.get('/', function (req, res, next) {
	User.find()
	.then(function (user) {
		res.json(user);
	})
	.then(null, next)
});

//Create a new user
router.post('/', function (req, res, next) {
	console.log("Hitting the right route :", req.body.data)
	User
	.create(req.body.data)
	.then(function (result) {
		res.status(201).json(result);
	})
	.then(null, next)
})

//Get a user by ID
router.get('/:id', function (req, res, next){
	User.findById(req.params.id)
	.then(function (user) {
		if(!user) {
			var err = new Error('User #' + req.params.id + ' not found');
			err.status = 404;
			throw err;
		} res.json(user);
	})
	.then(null, next)
})


module.exports = router;


