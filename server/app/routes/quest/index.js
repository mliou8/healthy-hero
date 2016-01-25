'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Quest = mongoose.model('Quest');
var http = require('http')
var calculator = require('../../../algorithms/second-file.js');

//Get all Quests
router.get('/', function (req, res, next) {
	Quest.find()
	.then(function (quest) {
		res.json(quest);
	})
	.then(null, next)
});

router.get('/:name', function (req, res, next) {
	Quest.find({name: req.params.name})
	.then(function (quest) {
		res.json(quest);
	})
	.then(null, next)
});

//Testing http request through backend
router.get('/test', function (req, res, next) {
	http.request(calculator.options, calculator.callback).end()
})


router.put('/:name', function (req, res, next) {
	Quest.find({name: req.params.name})
	.then(function(quest) {
		for (var key in req.body) {
			quest[key] = req.body[key];
		}
		return quest.save();
	})
	.then(function(quest) {
		return Quest.find({name: req.params.id})
	})
	.then(function(quest) {
		res.json(quest);
	})
	.then(null, next);
})


module.exports = router;


