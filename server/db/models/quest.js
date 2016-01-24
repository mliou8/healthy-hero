'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
    	type: String
    },
	products: [{
		    type: mongoose.Schema.Types.ObjectId,
		    ref: 'Product'
	}],
	reward: {
		type: Number
	}
});

mongoose.model('Quest', schema);