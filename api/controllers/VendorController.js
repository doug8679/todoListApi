'use strict';


var mongoose = require('mongoose'),
  Vendor = mongoose.model('Vendor');

exports.list_all_vendors = function(req, res) {
  Vendor.find({}, function(err, vendor) {
    if (err)
      res.send(err);
    res.json(vendor);
  });
};




exports.create_a_vendor = function(req, res) {
  var new_vendor = new Vendor(req.body);
  new_vendor.save(function(err, vendor) {
    if (err)
      res.send(err);
    res.json(vendor);
  });
};


exports.read_a_vendor = function(req, res) {
  Vendor.findById(req.params.vendorId, function(err, vendor) {
    if (err)
      res.send(err);
    res.json(vendor);
  });
};


exports.update_a_vendor = function(req, res) {
  Vendor.findOneAndUpdate({_id: req.params.vendorId}, req.body, {new: true}, function(err, vendor) {
    if (err)
      res.send(err);
    res.json(vendor);
  });
};


exports.delete_a_vendor = function(req, res) {


  Task.remove({
    _id: req.params.vendorId
  }, function(err, vendor) {
    if (err)
      res.send(err);
    res.json({ message: 'Vendor successfully deleted' });
  });
};
