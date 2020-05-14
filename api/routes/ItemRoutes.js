'use strict';

module.exports = function(app) {
    var item = require('../controllers/ItemController');

    app.route('/items')
        .get(item.list_all_items)
        .post(item.create_an_item);
    
    app.route('/items/:itemId')
        .get(item.read_an_item)
        .put(item.update_an_item)
        .delete(item.delete_an_item);
};