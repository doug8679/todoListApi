const mongoose = require('mongoose');

const TransactionItem = new mongoose.model(
    "TransactionItem",
    new mongoose.Schema({
        transaction: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        },
        quantity: Number,
        total: Number
    })
);

module.exports = TransactionItem;