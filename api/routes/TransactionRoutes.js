'use strict';
module.exports = function(app) {
  var trans = require('../controllers/TransactionController');

  // todoList Routes
  app.route('/transactions')
    .get(trans.list_all_transactions)
    .post(trans.create_a_transaction);


  app.route('/transactions/:transactionId')
    .get(trans.read_a_transaction)
    .put(trans.update_a_transaction)
    .delete(trans.delete_a_transaction);

  app.route('/vendors/:vendorId/transactions')
    .get(trans.list_transactions_for_vendor);
};