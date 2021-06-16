const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    last: {
        type: String,
        min: 0,
    },
    buy: {
        type: String,
        min: 0,

    },
    sell: {
        type: String,
        min: 0,
    },
    volume: {
        type: Number,
        min: 0,
    },
    base_unit: {
        type: String,
        required: true
    },

});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;