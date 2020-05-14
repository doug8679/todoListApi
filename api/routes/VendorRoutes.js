'use strict';
module.exports = function(app) {
  var vendor = require('../controllers/VendorController');

  // todoList Routes
  app.route('/vendors')
    .get(vendor.list_all_vendors)
    .post(vendor.create_a_vendor);

  app.route('/vendors/:vendorId')
    .get(vendor.read_a_vendor)
    .put(vendor.update_a_vendor)
    .delete(vendor.delete_a_vendor);
};