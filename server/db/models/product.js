'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    nutrients: [{
    	nutrient: {
    		type: mongoose.Schema.Types.ObjectId,
    		ref: 'Nutrient'
    	}
    }],
    category: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'Category'
    },
    photoUrl: {
    	type: String
    },
    description: {
    	type: String
    }
});

mongoose.model('Product', schema);

