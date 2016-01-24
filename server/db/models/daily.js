'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
    },
    dailyQuest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }

});

mongoose.model('Daily', schema);