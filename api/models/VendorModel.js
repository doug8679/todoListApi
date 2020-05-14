const mongoose = require('mongoose');

const Vendor = new mongoose.model(
    "Vendor",
    new mongoose.Schema({
        name: String,
        phone: String
    })
);

module.exports = Vendor;