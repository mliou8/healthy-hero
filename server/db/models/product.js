'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    nutrients: [{
        type: String,
        ref: 'Nutrient'
    }],
    category: [{
        type: String,
        ref: 'Category'
    }],
    photoUrl: {
    	type: String
    },
    description: {
    	type: String
    }
});

mongoose.model('Product', schema);

