var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Vendor = require('./api/models/VendorModel'),
  Transaction = require('./api/models/TransactionModel'),
  TransactionItem = require('./api/models/TransactionItemModel'),
  Item = require('./api/models/ItemModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
routes = require('./api/routes/VendorRoutes'); //importing route
routes(app);
routes = require('./api/routes/TransactionRoutes'); //importing route
routes(app);
routes = require('./api/routes/ItemRoutes'); //importing route
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
