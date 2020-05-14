'use strict';


var mongoose = require('mongoose'),
  Transaction = mongoose.model('Transaction');

exports.list_all_transactions = function(req, res) {
  Transaction.find({}, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.list_transactions_for_vendor = function(req, res) {
    Transaction.find({vendor: req.params.vendorId}, function(err, trans) {
          if (err)
            res.send(err);
          res.json(trans);
    });
};


exports.create_a_transaction = function(req, res) {
  var new_transaction = new Transaction(req.body);
  new_transaction.save(function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.read_a_transaction = function(req, res) {
  Transaction.findById(req.params.transactionId, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.update_a_transaction = function(req, res) {
  Transaction.findOneAndUpdate({_id: req.params.transactionId}, req.body, {new: true}, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.delete_a_transaction = function(req, res) {


  Task.remove({
    _id: req.params.transactionId
  }, function(err, transaction) {
    if (err)
      res.send(err);
    res.json({ message: 'Transaction successfully deleted' });
  });
};
