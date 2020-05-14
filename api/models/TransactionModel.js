const mongoose = require('mongoose');

const Transaction = new mongoose.model(
    "Transaction",
    new mongoose.Schema({
        date: Date,
        vendor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Vendor"
        },
        transType: {
            type: String,
            enum : ['purchase','return'],
            default: 'purchase'
        },
        total: Number
    })
);

module.exports = Transaction;