const mongoose = require('mongoose');

const Item = new mongoose.model(
    "Item",
    new mongoose.Schema({
        itemNumber: String,
        name: String,
        description: String,
        price: Number
    })
);

module.exports = Item;